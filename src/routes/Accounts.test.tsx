import { act, fireEvent, render, screen } from '@testing-library/react';
import { ipcRenderer, shell } from 'electron';
import { MemoryRouter } from 'react-router-dom';
import {
  mockAuth,
  mockGitHubAppAccount,
  mockOAuthAccount,
  mockPersonalAccessTokenAccount,
  mockSettings,
} from '../__mocks__/state-mocks';
import { AppContext } from '../context/App';
import { AccountsRoute } from './Accounts';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('routes/Accounts.tsx', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('General', () => {
    it('should render itself & its children', async () => {
      await act(async () => {
        render(
          <AppContext.Provider
            value={{
              auth: {
                accounts: [
                  mockPersonalAccessTokenAccount,
                  mockOAuthAccount,
                  mockGitHubAppAccount,
                ],
              },
              settings: mockSettings,
            }}
          >
            <MemoryRouter>
              <AccountsRoute />
            </MemoryRouter>
          </AppContext.Provider>,
        );
      });

      expect(screen.getByTestId('accounts')).toMatchSnapshot();
    });

    it('should go back by pressing the icon', async () => {
      await act(async () => {
        render(
          <AppContext.Provider
            value={{
              auth: mockAuth,
              settings: mockSettings,
            }}
          >
            <MemoryRouter>
              <AccountsRoute />
            </MemoryRouter>
          </AppContext.Provider>,
        );
      });

      fireEvent.click(screen.getByLabelText('Go Back'));
      expect(mockNavigate).toHaveBeenNthCalledWith(1, -1);
    });
  });

  describe('Account interactions', () => {
    it('open profile in external browser', async () => {
      await act(async () => {
        render(
          <AppContext.Provider
            value={{
              auth: {
                accounts: [mockPersonalAccessTokenAccount],
              },
              settings: mockSettings,
            }}
          >
            <MemoryRouter>
              <AccountsRoute />
            </MemoryRouter>
          </AppContext.Provider>,
        );
      });

      fireEvent.click(screen.getByTitle('Open Profile'));

      expect(shell.openExternal).toHaveBeenCalledTimes(1);
      expect(shell.openExternal).toHaveBeenCalledWith(
        'https://github.com/octocat',
      );
    });

    it('open host in external browser', async () => {
      await act(async () => {
        render(
          <AppContext.Provider
            value={{
              auth: {
                accounts: [mockPersonalAccessTokenAccount],
              },
              settings: mockSettings,
            }}
          >
            <MemoryRouter>
              <AccountsRoute />
            </MemoryRouter>
          </AppContext.Provider>,
        );
      });

      fireEvent.click(screen.getByTitle('Open Host'));

      expect(shell.openExternal).toHaveBeenCalledTimes(1);
      expect(shell.openExternal).toHaveBeenCalledWith('https://github.com');
    });

    it('open developer settings in external browser', async () => {
      await act(async () => {
        render(
          <AppContext.Provider
            value={{
              auth: {
                accounts: [mockPersonalAccessTokenAccount],
              },
              settings: mockSettings,
            }}
          >
            <MemoryRouter>
              <AccountsRoute />
            </MemoryRouter>
          </AppContext.Provider>,
        );
      });

      fireEvent.click(screen.getByTitle('Open Developer Settings'));

      expect(shell.openExternal).toHaveBeenCalledTimes(1);
      expect(shell.openExternal).toHaveBeenCalledWith(
        'https://github.com/settings/tokens',
      );
    });

    it('should logout', async () => {
      const logoutFromAccountMock = jest.fn();
      await act(async () => {
        render(
          <AppContext.Provider
            value={{
              auth: {
                accounts: [mockPersonalAccessTokenAccount],
              },
              settings: mockSettings,
              logoutFromAccount: logoutFromAccountMock,
            }}
          >
            <MemoryRouter>
              <AccountsRoute />
            </MemoryRouter>
          </AppContext.Provider>,
        );
      });

      fireEvent.click(screen.getByTitle('Logout octocat'));

      expect(logoutFromAccountMock).toHaveBeenCalledTimes(1);

      expect(ipcRenderer.send).toHaveBeenCalledTimes(2);
      expect(ipcRenderer.send).toHaveBeenCalledWith('update-icon');
      expect(ipcRenderer.send).toHaveBeenCalledWith('update-title', '');
      expect(mockNavigate).toHaveBeenNthCalledWith(1, -1);
    });
  });

  describe('Add new accounts', () => {
    describe('Login with Personal Access Token', () => {
      it('should show login with personal access token button if not logged in', async () => {
        await act(async () => {
          render(
            <AppContext.Provider
              value={{
                auth: { accounts: [mockOAuthAccount] },
                settings: mockSettings,
              }}
            >
              <MemoryRouter>
                <AccountsRoute />
              </MemoryRouter>
            </AppContext.Provider>,
          );
        });

        expect(
          screen.getByTitle('Login with Personal Access Token').hidden,
        ).toBe(false);

        fireEvent.click(screen.getByTitle('Login with Personal Access Token'));
        expect(mockNavigate).toHaveBeenNthCalledWith(
          1,
          '/login-personal-access-token',
          {
            replace: true,
          },
        );
      });

      it('should hide login with personal access token button if already logged in', async () => {
        await act(async () => {
          render(
            <AppContext.Provider
              value={{
                auth: { accounts: [mockPersonalAccessTokenAccount] },
                settings: mockSettings,
              }}
            >
              <MemoryRouter>
                <AccountsRoute />
              </MemoryRouter>
            </AppContext.Provider>,
          );
        });

        expect(
          screen.getByTitle('Login with Personal Access Token').hidden,
        ).toBe(true);
      });
    });

    describe('Login with OAuth App', () => {
      it('should show login with oauth app if not logged in', async () => {
        await act(async () => {
          render(
            <AppContext.Provider
              value={{
                auth: { accounts: [mockPersonalAccessTokenAccount] },
                settings: mockSettings,
              }}
            >
              <MemoryRouter>
                <AccountsRoute />
              </MemoryRouter>
            </AppContext.Provider>,
          );
        });

        expect(screen.getByTitle('Login with OAuth App').hidden).toBe(false);

        fireEvent.click(screen.getByTitle('Login with OAuth App'));
        expect(mockNavigate).toHaveBeenNthCalledWith(1, '/login-oauth-app', {
          replace: true,
        });
      });

      it('should hide login with oauth app route if already logged in', async () => {
        await act(async () => {
          render(
            <AppContext.Provider
              value={{
                auth: { accounts: [mockOAuthAccount] },
                settings: mockSettings,
              }}
            >
              <MemoryRouter>
                <AccountsRoute />
              </MemoryRouter>
            </AppContext.Provider>,
          );
        });

        expect(screen.getByTitle('Login with OAuth App').hidden).toBe(true);
      });
    });
  });
});
