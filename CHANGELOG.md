# Changelog

## [7.9.0](https://github.com/setchy/gitify/compare/v7.8.0...v7.9.0) (2026-10-03)


### 🚀 Features

* **events:** monitor power state ([#3060](https://github.com/setchy/gitify/issues/3060)) ([996bf10](https://github.com/setchy/gitify/commit/996bf10700c0230f09c18cd724172bc21eb34d5e))
* **filter:** review request type (user or team) ([#3023](https://github.com/setchy/gitify/issues/3023)) ([32edef8](https://github.com/setchy/gitify/commit/32edef80a00e297182cfe7f314febd3ff11b9d13))
* **filters:** distinguish author and commenter in search filters ([#2959](https://github.com/setchy/gitify/issues/2959)) ([aea09bf](https://github.com/setchy/gitify/commit/aea09bfc373f329cef5b00f082792c2a0440759b))
* **forge:** add bitbucket cloud support ([#3059](https://github.com/setchy/gitify/issues/3059)) ([a40d9b5](https://github.com/setchy/gitify/commit/a40d9b5669dee2fed037e5011edbed093785b0b3))
* **forge:** add GitLab support ([#3225](https://github.com/setchy/gitify/issues/3225)) ([6711eb7](https://github.com/setchy/gitify/commit/6711eb71d6986cea6ac7f9e6363ca2d74e6ff081))
* **gitea:** accept optional ports in instance hostnames ([#3344](https://github.com/setchy/gitify/issues/3344)) ([73f9479](https://github.com/setchy/gitify/commit/73f94798aa7b4238d9a28116a694d1f9254ee8b8))
* **gitea:** allow explicit HTTP instance origins ([#3345](https://github.com/setchy/gitify/issues/3345)) ([32d6d7b](https://github.com/setchy/gitify/commit/32d6d7b79574f4e9c7b2353bbfa94cf2e545365a))
* **github:** add support for parent and sub issues ([#3279](https://github.com/setchy/gitify/issues/3279)) ([f7763e7](https://github.com/setchy/gitify/commit/f7763e73c989a458f6ed912f9c69078d836775c0))
* **github:** format and render Bot account names ([#3183](https://github.com/setchy/gitify/issues/3183)) ([12efd18](https://github.com/setchy/gitify/commit/12efd18d1ac4437c90c855fe07fddf9bfa0445ca))
* **github:** improve pr enriched data ([#3204](https://github.com/setchy/gitify/issues/3204)) ([13aeba7](https://github.com/setchy/gitify/commit/13aeba72cc6f049b773f4597d50f6e3a69aaa260))
* **github:** update actor display names (managed and unmanaged) ([#3182](https://github.com/setchy/gitify/issues/3182)) ([5353e92](https://github.com/setchy/gitify/commit/5353e9231ba40df87e4b8a56e696f5b7c030c6be))
* **gitlab:** add brand icon and platform types ([c86e798](https://github.com/setchy/gitify/commit/c86e798a9061de363267b5a73a543b7c7ab36f46))
* **gitlab:** add forge adapter backed by the to-do API ([b917ac6](https://github.com/setchy/gitify/commit/b917ac63d3ad4307179980412bcafd434cb9f7a2))
* **gitlab:** add GitLabTodo subject type ([cb66678](https://github.com/setchy/gitify/commit/cb66678ee7a43ef1612eba4f5556a26c3b876654))
* **gitlab:** add personal access token login route ([fdefd7b](https://github.com/setchy/gitify/commit/fdefd7b3fa8f66ed7137209fcb66d4e65a4b8011))
* **linux:** add opt-in X11 backend for tray-anchored positioning ([#3218](https://github.com/setchy/gitify/issues/3218)) ([d7df927](https://github.com/setchy/gitify/commit/d7df92723a68c029b374d575f08986d7a00127db))
* **macos:** launch as an agent app so no dock tile is ever created ([#3117](https://github.com/setchy/gitify/issues/3117)) ([b60df93](https://github.com/setchy/gitify/commit/b60df9345772d94d1e34acf730dae42a7c4851ae))
* **metrics:** add pills for issue and stacked ([#3159](https://github.com/setchy/gitify/issues/3159)) ([c0b8718](https://github.com/setchy/gitify/commit/c0b8718e23f66faaf89212207201e2b38d27b2ea))
* **metrics:** improve pr review metric pill ([#3184](https://github.com/setchy/gitify/issues/3184)) ([9db47c8](https://github.com/setchy/gitify/commit/9db47c879a9967765fb7a84fb8e20363c16d5ec8))
* **metrics:** prepend issue fields as formatted labels ([#3276](https://github.com/setchy/gitify/issues/3276)) ([3e8a4c4](https://github.com/setchy/gitify/commit/3e8a4c466d703e9141ebc64de230cf5a46c00436))
* **metrics:** use new Issue Relates To Icon for linked issues pill ([#3277](https://github.com/setchy/gitify/issues/3277)) ([ed2dc66](https://github.com/setchy/gitify/commit/ed2dc665ecf4ed5c6c745f3bf2d8dd5282dbcbee))
* **notifications:** include repository name and subject type in native Windows OS notifications ([#3058](https://github.com/setchy/gitify/issues/3058)) ([ec0701c](https://github.com/setchy/gitify/commit/ec0701c00a6c7359f2425ef48691fb7a71e2bb17))
* **settings:** add "Keep window open when it loses focus" option ([#2875](https://github.com/setchy/gitify/issues/2875)) ([7085e9d](https://github.com/setchy/gitify/commit/7085e9dfb6d9cb101bd9ed8aec47248af3a53786))
* sign in with an existing GitHub CLI login ([#3316](https://github.com/setchy/gitify/issues/3316)) ([9b4eb34](https://github.com/setchy/gitify/commit/9b4eb343acc6668d0aaa27f4a153f02382318f35))
* **theme:** add a Glass option to show status icon colors ([19fa9fd](https://github.com/setchy/gitify/commit/19fa9fddf9222f028ebfaa6ce1d1390980058871))
* **theme:** add a Glass option to show status icon colors ([#3158](https://github.com/setchy/gitify/issues/3158)) ([a17ca8a](https://github.com/setchy/gitify/commit/a17ca8ac708ab6daa0286b966c50d4737956573c))
* **theme:** add design-language chrome token layer via [@theme](https://github.com/theme) inline ([f21a27a](https://github.com/setchy/gitify/commit/f21a27a63f3c782ee3115c9b494e71c30fe0b9d5))
* **theme:** add design-language settings axis with Classic/Glass selector ([21e4c9a](https://github.com/setchy/gitify/commit/21e4c9ac34e351f4c5e2a590d99168235597c98d))
* **theme:** add Glass design language ([#3130](https://github.com/setchy/gitify/issues/3130)) ([3505bbe](https://github.com/setchy/gitify/commit/3505bbec526cfc0125bfa31e8318f78918aa7eea))
* **theme:** add Glass shell surfaces with per-platform material branch ([b4c1e5e](https://github.com/setchy/gitify/commit/b4c1e5e25a22468b011428b3e9ad05cbb9d4564d))
* **theme:** add useAppearance hook with design-language root attributes ([83126c1](https://github.com/setchy/gitify/commit/83126c1c8d977c4f4b515735dd1de3a9ed891b07))
* **theme:** apply Glass to controls, list rows, and overlays ([fe3afab](https://github.com/setchy/gitify/commit/fe3afab181d362e778495e161c725417f9ae5ace))
* **theme:** bare the Glass account-profile button inside account cards ([22ab3d0](https://github.com/setchy/gitify/commit/22ab3d0a86c54e0330608a9f6fd675cd9b1203d0))
* **theme:** degrade Glass to solid under reduced transparency / contrast ([e5859d6](https://github.com/setchy/gitify/commit/e5859d61e8bc7344e539892216fdf32017389a0c))
* **theme:** desaturate Glass status palette toward a native tone ([627957e](https://github.com/setchy/gitify/commit/627957e87ee7b53b34f0d5e7275262a187db84c2))
* **theme:** dissolve sidebar into unified Glass and mute the primary CTA ([d9065bd](https://github.com/setchy/gitify/commit/d9065bdb00bbf66aa9cef43db41f23970911b85f))
* **theme:** float the Glass account header directly on the glass ([3aa607a](https://github.com/setchy/gitify/commit/3aa607a51ecaf8c3114197db8adcc1c9119b3593))
* **theme:** lighten Glass tints, soften blur, and use a translucent nav selection ([fb7fae2](https://github.com/setchy/gitify/commit/fb7fae21c6cba44353d21319c28b981c27a32d7b))
* **theme:** make Glass translucency always-on and add a visible sidebar divider ([86dcbf9](https://github.com/setchy/gitify/commit/86dcbf9c98d057443ccf489b3ecb0da373e278af))
* **theme:** make the sidebar logo follow the icon colour under Glass ([80b6298](https://github.com/setchy/gitify/commit/80b6298347b809ed390c0eeb5af06aa6753d94d6))
* **theme:** re-add high contrast for Classic, driven by the setting and the OS ([1446862](https://github.com/setchy/gitify/commit/1446862f5ed199dabe021c8b6ee94d97c7c195c9))
* **theme:** refine Glass surfaces ([26a88db](https://github.com/setchy/gitify/commit/26a88db642f0049fbc6397ca3d5eba205a941534))
* **theme:** soften notification grouping bands and count pills under Glass ([10db05d](https://github.com/setchy/gitify/commit/10db05d5e60aded26ff7832b55ef524d4dd9b113))
* **theme:** wire macOS window vibrancy via IPC for Glass ([8ecbe70](https://github.com/setchy/gitify/commit/8ecbe701746e90027c7d5d964b7ed50db2a2f2b3))
* **ui:** fade scrollable content at the top and bottom edges ([#3124](https://github.com/setchy/gitify/issues/3124)) ([cd6a1ad](https://github.com/setchy/gitify/commit/cd6a1ad8435f261318c21ddef87706204e1b7ec3))
* **updater:** add setting to opt-out of update notifications ([#3201](https://github.com/setchy/gitify/issues/3201)) ([54cf67a](https://github.com/setchy/gitify/commit/54cf67a1659f0899d9226e8e2062ddb5dfd56978))
* use menubar-managed popup behavior ([#3280](https://github.com/setchy/gitify/issues/3280)) ([168c541](https://github.com/setchy/gitify/commit/168c54194b7d4bedbd072953885944ec25da842e))


### 🐛 Bug Fixes

* `[@primer](https://github.com/primer)` motion animations for refresh ([#3289](https://github.com/setchy/gitify/issues/3289)) ([ccb9983](https://github.com/setchy/gitify/commit/ccb9983a4ecb33be195b3b0516188819bb98ed0e))
* align playwright versions ([#3299](https://github.com/setchy/gitify/issues/3299)) ([5544abe](https://github.com/setchy/gitify/commit/5544abeecfd962d6f7a3e51bdaafe1a45aa4bb75))
* **bitbucket:** fallback for missing notification URLs ([#3131](https://github.com/setchy/gitify/issues/3131)) ([0fbe08f](https://github.com/setchy/gitify/commit/0fbe08f732dfdf2eaf0125b838fca801d8d4ed0a))
* ci vp run args ([7a41c8d](https://github.com/setchy/gitify/commit/7a41c8dd39d150cf28b96e6080e41d25e78fda66))
* ci vp run args ([#3250](https://github.com/setchy/gitify/issues/3250)) ([9154444](https://github.com/setchy/gitify/commit/91544449fea7f329a1977bdae6a49bbae5537b20))
* **ci:** patch app-builder-lib keychain password for macOS signing ([#3284](https://github.com/setchy/gitify/issues/3284)) ([aa5f25d](https://github.com/setchy/gitify/commit/aa5f25d1df38f177cbcd3f7d643a857e4c26a8d8))
* **ci:** skip @primer/primitives postinstall script ([#2868](https://github.com/setchy/gitify/issues/2868)) ([7f24d17](https://github.com/setchy/gitify/commit/7f24d1734eec1c8ecbead1fda26532f528a4dffa))
* correct online state on startup instead of waiting for a network event ([#3147](https://github.com/setchy/gitify/issues/3147)) ([1110bde](https://github.com/setchy/gitify/commit/1110bdea52018e0a31b3a7614f36c6aa1bda193e))
* **deps-core:** pin electron to 43.2.0 to restore Linux tray icons ([#3208](https://github.com/setchy/gitify/issues/3208)) ([73fb716](https://github.com/setchy/gitify/commit/73fb716da6ca219f36952bb3898a0d37327f592d))
* **deps:** declare Vitest test dependencies ([e34b6d8](https://github.com/setchy/gitify/commit/e34b6d87f8870ad08ad9ca87b594d17386142fad))
* drop cached forge clients on app reset ([#3071](https://github.com/setchy/gitify/issues/3071)) ([316ab00](https://github.com/setchy/gitify/commit/316ab003329a8fcc04578d795006514df8a3b454))
* **forge/github:** sanitize gql query docs based on gated feature compatibility ([#3178](https://github.com/setchy/gitify/issues/3178)) ([6ae87ca](https://github.com/setchy/gitify/commit/6ae87cad593e762edc7a54aa0bc3cba1cb34cc78))
* **gitlab:** bound to-do pagination ([8c2fbe5](https://github.com/setchy/gitify/commit/8c2fbe50f559ed594726867999ba970d8f380b9d))
* **gitlab:** correct the to-do actor, draft state and action mappings ([fa12e89](https://github.com/setchy/gitify/commit/fa12e89decec2affc3cb9e546b00c3471e7951de))
* **gitlab:** list required fine-grained permissions and surface login errors ([#3264](https://github.com/setchy/gitify/issues/3264)) ([4cee724](https://github.com/setchy/gitify/commit/4cee72491a40a6e8f28d872a6355e7fea1826a16))
* **gitlab:** remove the duplicate mark-as-done action ([364e125](https://github.com/setchy/gitify/commit/364e1252e5516c94854578a9d83c5fe8346de192))
* increase polling interval for GitHub device code flow ([#2899](https://github.com/setchy/gitify/issues/2899)) ([abeb0d7](https://github.com/setchy/gitify/commit/abeb0d7e174338e3251d8cda004b1637f049c28e))
* increment polling interval when GitHub device code flow returns slow_down ([abeb0d7](https://github.com/setchy/gitify/commit/abeb0d7e174338e3251d8cda004b1637f049c28e))
* keep glass dropdown options readable in dark mode ([#3317](https://github.com/setchy/gitify/issues/3317)) ([aa79c60](https://github.com/setchy/gitify/commit/aa79c609ed7707ddc7587de5cd1b39e45a7e6994))
* keep the scroll fade ramping in packaged builds ([#3170](https://github.com/setchy/gitify/issues/3170)) ([ef2aec0](https://github.com/setchy/gitify/commit/ef2aec062f27de8b54b01394696c492825b90fa9))
* menubar icon state ([#3205](https://github.com/setchy/gitify/issues/3205)) ([9b08a09](https://github.com/setchy/gitify/commit/9b08a097f665b1e80fd0a979bd4e69913a14d1f5))
* **metrics:** fetch stacked pr metrics only for GitHub Cloud ([#3175](https://github.com/setchy/gitify/issues/3175)) ([bfd2672](https://github.com/setchy/gitify/commit/bfd267267960d9b5254594de7d98f39e38deff9f))
* **notifications:** drop subject type suffix from native notification body ([#3113](https://github.com/setchy/gitify/issues/3113)) ([585a2a9](https://github.com/setchy/gitify/commit/585a2a9e4781f12d2559726bb2020ca841922ae8))
* **notifications:** keep the GitLab brand name in the subject type label ([f54bf69](https://github.com/setchy/gitify/commit/f54bf69a0304e55ee0339e01e489a39229fd938b))
* online state ([3d45a5d](https://github.com/setchy/gitify/commit/3d45a5d77f775e6cf3b1a3ef3f9c824fd4df2cb1))
* re-hide macos dock icon after parentless dialogs ([#3100](https://github.com/setchy/gitify/issues/3100)) ([8f4b33a](https://github.com/setchy/gitify/commit/8f4b33a54ccdbfc9295ed4cdf35528cf3adfdd08))
* restart to install update, and three update-flow bugs ([#3167](https://github.com/setchy/gitify/issues/3167)) ([01fed23](https://github.com/setchy/gitify/commit/01fed233f579a802ae2c03150095485714e777c8))
* restore Linux glass label tooltip contrast ([#3343](https://github.com/setchy/gitify/issues/3343)) ([c378ba6](https://github.com/setchy/gitify/commit/c378ba6b7c859d63e38234b0cdaa96b0a4819667))
* rollback failed notification interaction with visual warning ([#3145](https://github.com/setchy/gitify/issues/3145)) ([cfa12a2](https://github.com/setchy/gitify/commit/cfa12a24ef2b93ff8d4edf8eaaccea24cd808130))
* seed online status from the online manager on first render ([b5f72e2](https://github.com/setchy/gitify/commit/b5f72e276f761df7bf6a3f24c4be345f045e1d5b))
* sonarqube issues ([046bb8e](https://github.com/setchy/gitify/commit/046bb8ecf6b5a5073b97b6b7aa3e91ada8befe22))
* stop notification polling from multiplying API requests ([#3066](https://github.com/setchy/gitify/issues/3066)) ([a40bd76](https://github.com/setchy/gitify/commit/a40bd76a02a748f3f7b359c04d41d185ca6ff6a1))
* support standalone GNOME tray integration ([#3297](https://github.com/setchy/gitify/issues/3297)) ([72ccf73](https://github.com/setchy/gitify/commit/72ccf7351ab159b335fac550faeb880a7c5302b2))
* tailwind bg utility ([#2989](https://github.com/setchy/gitify/issues/2989)) ([256ff9b](https://github.com/setchy/gitify/commit/256ff9b9772bbc31eaaef99409bebbbac0916c4a))
* **theme:** construct a transparent vibrant window on macOS so Glass material shows ([9cc01ea](https://github.com/setchy/gitify/commit/9cc01ea3df7aaced3287949c056b5635e902cbfd))
* **theme:** harden the native-theme sync ([9b3df25](https://github.com/setchy/gitify/commit/9b3df2524148c75cff5c8423c139d1a55a29ab00))
* **theme:** keep Glass status icons monochrome ([39744c0](https://github.com/setchy/gitify/commit/39744c01e0a704844687dd940bf1e8cf343005c0))
* **theme:** keep Glass translucent after a runtime Classic to Glass switch ([f926d56](https://github.com/setchy/gitify/commit/f926d56c02eebe594cb7ed40807c2be0cd5d172e))
* **theme:** make Glass vibrancy show the real desktop on macOS ([11433a1](https://github.com/setchy/gitify/commit/11433a131de2146fed642444eca0a996d3fc0ddc))
* **theme:** resolve Glass tokens under the System theme ([5242380](https://github.com/setchy/gitify/commit/5242380e59e1a830a4c4458d8517008eb9f49ab4))
* **theme:** resolve the base colour tokens under the System theme ([3d77d37](https://github.com/setchy/gitify/commit/3d77d37d28907f468e524edc60bf923336470c58))
* **theme:** restore the notification status icon colours ([850f7c0](https://github.com/setchy/gitify/commit/850f7c00787a5ba95ea49cb40767ad212625530f))
* **tray:** populate Linux right-click menu via setContextMenu ([#2856](https://github.com/setchy/gitify/issues/2856)) ([24ceb67](https://github.com/setchy/gitify/commit/24ceb67198a8d7f30db475240673e7fcde2e5484))


### ⚡️ Performance

* **notifications:** refresh enriched details when window regains focus ([#3118](https://github.com/setchy/gitify/issues/3118)) ([ffc699c](https://github.com/setchy/gitify/commit/ffc699cc1ac8fffaa3e03182e6ce65ef008b7f1a))
* **notifications:** respect server-recommended poll interval ([#3116](https://github.com/setchy/gitify/issues/3116)) ([ea302a5](https://github.com/setchy/gitify/commit/ea302a5aa70d38b92317cb3005670ea27f26a976))
* **notifications:** skip re-enrichment of unchanged notifications ([#3102](https://github.com/setchy/gitify/issues/3102)) ([2ff02e1](https://github.com/setchy/gitify/commit/2ff02e148bc43960860271d4c4b9b54d767e7d01))
* virtualize the notification list ([#3319](https://github.com/setchy/gitify/issues/3319)) ([e2fea1a](https://github.com/setchy/gitify/commit/e2fea1ae2c0303e70d5196584aa4aad3b3a2f8c9))


### 🧼 Code Refactoring

* **accounts:** move account crud into the accounts store ([#3036](https://github.com/setchy/gitify/issues/3036)) ([8043b10](https://github.com/setchy/gitify/commit/8043b106324a5148e7a5ff82e11895f10677abd9))
* **api:** configure gc and stale time ([#3146](https://github.com/setchy/gitify/issues/3146)) ([a9c0021](https://github.com/setchy/gitify/commit/a9c0021db9653412841457e5ca87152a9195a265))
* **api:** key queries by account identity and consolidate type exports ([43deef1](https://github.com/setchy/gitify/commit/43deef1b56f465de4a1de8f46e0f53d5e9161416))
* **api:** orderby reviews no longer supported ([#3278](https://github.com/setchy/gitify/issues/3278)) ([f8ca915](https://github.com/setchy/gitify/commit/f8ca9151c0ed540434e0bcdfcead57b6de5c736c))
* **auth:** remove legacy plaintext token migration ([#3031](https://github.com/setchy/gitify/issues/3031)) ([a061eaa](https://github.com/setchy/gitify/commit/a061eaa112fa18885dd4de0cea6c0e51094cad0c))
* **bitbucket:** simplify repo url transform ([#3133](https://github.com/setchy/gitify/issues/3133)) ([c15b323](https://github.com/setchy/gitify/commit/c15b3230a9139f501ccd07f9a1aa17a6549993aa))
* **components:** import Primer directly instead of the ui barrel ([da34ca4](https://github.com/setchy/gitify/commit/da34ca49b7cf2faf50fed5aba95ac864e70d672f))
* correct online state before any query can run ([223992f](https://github.com/setchy/gitify/commit/223992f8560f6cf78de1496bdc2fb616fd4f724a))
* device code flow ux ([#3063](https://github.com/setchy/gitify/issues/3063)) ([421ee12](https://github.com/setchy/gitify/commit/421ee123485cc90262c5db68bddc3a198d5e224b))
* **forges/github:** move GITHUB_API_MERGE_BATCH_SIZE into forges/github ([#2881](https://github.com/setchy/gitify/issues/2881)) ([6964827](https://github.com/setchy/gitify/commit/69648274b95790b52597ba7deacaa437db79f80e))
* **forges:** bind account-scoped adapter operations via getAccountAdapter ([#3266](https://github.com/setchy/gitify/issues/3266)) ([525386e](https://github.com/setchy/gitify/commit/525386e43339a4c82263979f987742ea0cf534ed))
* **forges:** bundle related ForgeAdapter members into capability objects ([#2887](https://github.com/setchy/gitify/issues/2887)) ([e9d8169](https://github.com/setchy/gitify/commit/e9d8169d330fbc386dbcfa9a9a6ba2d9ea0fee0c))
* **forges:** expose getAuthMethodIcon on the adapter ([#2883](https://github.com/setchy/gitify/issues/2883)) ([a3886f7](https://github.com/setchy/gitify/commit/a3886f772562384aae9aeb750aa01c1573b44723))
* **forges:** read settings store inside the forge layer ([#3035](https://github.com/setchy/gitify/issues/3035)) ([e183b59](https://github.com/setchy/gitify/commit/e183b598770977124d42f9ee2537178d9a67cca3))
* **forges:** tidy up the forge adapter interface ([c0ddcbf](https://github.com/setchy/gitify/commit/c0ddcbfaa6c623595017b71a21f47db65372c1ed)), closes [#2873](https://github.com/setchy/gitify/issues/2873)
* **gitlab:** fetch login metadata in parallel and log dropped failures ([7b34c09](https://github.com/setchy/gitify/commit/7b34c0989d4ae9e03d0aa4fab409a662c5c10cf0))
* **links:** rename openGitHub* host helpers to openHost* ([#2885](https://github.com/setchy/gitify/issues/2885)) ([d0009d3](https://github.com/setchy/gitify/commit/d0009d3bfdc98948b5b7a50c50b8023a397bfcd6))
* **login:** organize login routes and components by forge ([#3030](https://github.com/setchy/gitify/issues/3030)) ([5edabc1](https://github.com/setchy/gitify/commit/5edabc1c7d17c240db0e7082e55bbcb574682496))
* **main:** adopt `electron-menubar` v10 for window/tray/system handling ([#2880](https://github.com/setchy/gitify/issues/2880)) ([d003a61](https://github.com/setchy/gitify/commit/d003a6101879fe90f6dc7f70af1ca35d30c6ab31))
* **notifications:** cache unfiltered notifications and filter in query select ([f30b5cf](https://github.com/setchy/gitify/commit/f30b5cf42d4ebf15decbd7dca826e42f30a6d0f0))
* **notifications:** generate notification URL via the adapter ([#2886](https://github.com/setchy/gitify/issues/2886)) ([ff6c826](https://github.com/setchy/gitify/commit/ff6c82689ca3cb485469f7bfe3a97c1d9b3b5105))
* replace `cn` util with dep ([#3256](https://github.com/setchy/gitify/issues/3256)) ([14eb005](https://github.com/setchy/gitify/commit/14eb0051bfb0ece5d1076359d3352157dfeff5e8))
* retire AppContext in favor of hooks and stores ([2536395](https://github.com/setchy/gitify/commit/2536395f85341513b9e01c17cea3782358f01047))
* retire fetch type notification setting ([#3070](https://github.com/setchy/gitify/issues/3070)) ([94f37e2](https://github.com/setchy/gitify/commit/94f37e2f09b52384fbb0edc02c9153615387c6f6))
* **settings:** drop the redundant "value display" comments ([a421629](https://github.com/setchy/gitify/commit/a421629e8256303446c210b4e02ec43773575460))
* **shortcuts:** forge specific issue and pull request urls ([#3255](https://github.com/setchy/gitify/issues/3255)) ([730f517](https://github.com/setchy/gitify/commit/730f517203a4ade3914be59642430817b81e5a66))
* simplify bitbucket repo url ([c15b323](https://github.com/setchy/gitify/commit/c15b3230a9139f501ccd07f9a1aa17a6549993aa))
* **storage:** remove legacy storage key after migration ([#3037](https://github.com/setchy/gitify/issues/3037)) ([5854376](https://github.com/setchy/gitify/commit/5854376cfb8ba5d2dffcf7a3de7f20efb6b27ffd))
* tanstack-query for api state, zustand for accounts and settings state ([b270e74](https://github.com/setchy/gitify/commit/b270e740ff16dcbe435c61b11cf23875b7f7b060))
* tanstack-query for api state, zustand for accounts and settings state ([#2637](https://github.com/setchy/gitify/issues/2637)) ([1d7cfe8](https://github.com/setchy/gitify/commit/1d7cfe806b516e9099c4bd9b4ebf78413e51b8fb))
* **theme:** drop the redundant light-dark scoping comment ([6c03cf7](https://github.com/setchy/gitify/commit/6c03cf7c5429d3d587f8429fa96164589f6c6591))
* **theme:** route renderer through app-owned ui/ layer with import boundary ([ab9fc5b](https://github.com/setchy/gitify/commit/ab9fc5b586ee41879afc02f6325c290c692b7d9f))
* **theme:** source the base colour tokens from Primer ([#3148](https://github.com/setchy/gitify/issues/3148)) ([28a3566](https://github.com/setchy/gitify/commit/28a3566af0ed4e6d68287d28f26807ac1361b637))
* **theme:** trim non-essential comments ([90dc3f3](https://github.com/setchy/gitify/commit/90dc3f3cff31a490e0fb84fca592db56df82ad81))
* tidy up the forge adapter interface ([#2874](https://github.com/setchy/gitify/issues/2874)) ([c0ddcbf](https://github.com/setchy/gitify/commit/c0ddcbfaa6c623595017b71a21f47db65372c1ed))
* vite config ([#3110](https://github.com/setchy/gitify/issues/3110)) ([d09ef0a](https://github.com/setchy/gitify/commit/d09ef0a05ac2260ee95f8f3d08e524dcb43a7723))


### 📚 Documentation

* add GitLab to the supported forge matrix ([7c3a465](https://github.com/setchy/gitify/commit/7c3a465e6e38d40c866235a845a556b5b2ff2e38))
* assign GitLab forge maintainer and codeowner ([cad5e7d](https://github.com/setchy/gitify/commit/cad5e7d9f00a9c00d65bbf35f77c615c3474bec1))
* specific workflow badges ([904b0a9](https://github.com/setchy/gitify/commit/904b0a9bb0519997e2afc164dcb1cd73d4f58a4a))
* Update CONTRIBUTING.md ([d0a462b](https://github.com/setchy/gitify/commit/d0a462b9b0e4b869c93a5ece06ed2d95cfc8a720))
* update gh templates ([#3254](https://github.com/setchy/gitify/issues/3254)) ([7ee14d0](https://github.com/setchy/gitify/commit/7ee14d005286b270edbfbe9345379b23cd11e318))
* Update README.md ([c97edd2](https://github.com/setchy/gitify/commit/c97edd28e4b6755f4d778d4632c254bac39cfe61))


### 🏗️ Build System

* prepare `v7.0.0` release ([#3062](https://github.com/setchy/gitify/issues/3062)) ([bcedd3f](https://github.com/setchy/gitify/commit/bcedd3f6a1c0344150c06082e122e256081122b4))
* prepare `v7.0.1` release ([#3067](https://github.com/setchy/gitify/issues/3067)) ([1a3f5bb](https://github.com/setchy/gitify/commit/1a3f5bb51f5362f895076168f7051f1a74e87d9e))
* update labeler for perf semantic commit type ([#3105](https://github.com/setchy/gitify/issues/3105)) ([9d29de4](https://github.com/setchy/gitify/commit/9d29de427cb9d9dcc91193b307ffd6558905200c))


### 🤖 Continuous Integration

* add `core-deps` scope to surface within release-please generated changelog/release notes ([#3114](https://github.com/setchy/gitify/issues/3114)) ([672ce07](https://github.com/setchy/gitify/commit/672ce07a0a79573f7d244aaa4bfca8b50455d5d1))
* add emoji prefixes to release-please changelog sections ([#3095](https://github.com/setchy/gitify/issues/3095)) ([47ec087](https://github.com/setchy/gitify/commit/47ec08709845e38e2a7c7285b48a4dec7ce3446b))
* add release labeling ([#3112](https://github.com/setchy/gitify/issues/3112)) ([32aaf29](https://github.com/setchy/gitify/commit/32aaf29d1a89b3b7e684a5b12f84253f09a2ca0e))
* credit contributors in published release notes ([#3109](https://github.com/setchy/gitify/issues/3109)) ([968715f](https://github.com/setchy/gitify/commit/968715f7f6e35768c036cf97c14a3dd5682cc981))
* defer release-please PR creation while a draft release is pending ([#3108](https://github.com/setchy/gitify/issues/3108)) ([25d7f9b](https://github.com/setchy/gitify/commit/25d7f9bcb6c2a3aa3b43d11c9c3b3677034f81d7))
* deploy website after the release pipeline publishes ([#3123](https://github.com/setchy/gitify/issues/3123)) ([da807d2](https://github.com/setchy/gitify/commit/da807d2b8f9e5a4889a358ae495850657b24aeb2))
* explicit `.nvmrc` ([986b681](https://github.com/setchy/gitify/commit/986b681c065d4d3f26258a82f915cb52b9f3eff8))
* explicit `.nvmrc` ([#3251](https://github.com/setchy/gitify/issues/3251)) ([12d4fca](https://github.com/setchy/gitify/commit/12d4fca463cd1e0b9dd8e9eea8a7b36f34da0d45))
* format contributors section as unordered list ([#3126](https://github.com/setchy/gitify/issues/3126)) ([a9726d3](https://github.com/setchy/gitify/commit/a9726d30ae244e49fa7051d845fb4366407b4ecd))
* publish draft release by id to avoid HTTP 422 on tag lookup ([#3098](https://github.com/setchy/gitify/issues/3098)) ([c83528d](https://github.com/setchy/gitify/commit/c83528dd93b0239aa26e9650547628ef4dc7c024))
* skip release PR generation when a release was just created ([#3120](https://github.com/setchy/gitify/issues/3120)) ([4fc6f83](https://github.com/setchy/gitify/commit/4fc6f8316e76fe7e33e887b735c768d689bd4574))
* update perf emoji ([b6c9c6e](https://github.com/setchy/gitify/commit/b6c9c6ef8683749fa816eefc30ecf55d8b997938))
* use setup-vp for JavaScript tooling ([#3245](https://github.com/setchy/gitify/issues/3245)) ([3c9e6dc](https://github.com/setchy/gitify/commit/3c9e6dc507b2035da9457aeb4d30d185eed8546c))


### 📦 Dependency Updates (Core)

* **deps-core:** update @octokit/oauth-methods to v6.0.4 ([#3185](https://github.com/setchy/gitify/issues/3185)) ([da48f72](https://github.com/setchy/gitify/commit/da48f726a6ce0292340f97960dcc5bc39d7829d0))
* **deps-core:** update @octokit/openapi-types to v28 ([#3152](https://github.com/setchy/gitify/issues/3152)) ([8c8c604](https://github.com/setchy/gitify/commit/8c8c604e2568c52f12ae2416b80d45d9fa548363))
* **deps-core:** update @octokit/openapi-types to v29 ([#3241](https://github.com/setchy/gitify/issues/3241)) ([fc08ce2](https://github.com/setchy/gitify/commit/fc08ce28c5c43cb34be395817d5e0d5072c3cb1d))
* **deps-core:** update @octokit/openapi-types to v29.0.1 ([#3246](https://github.com/setchy/gitify/issues/3246)) ([2054df0](https://github.com/setchy/gitify/commit/2054df0afc7c403208b52f6780924c7ad827b19e))
* **deps-core:** update @octokit/plugin-paginate-rest to v15 ([#3153](https://github.com/setchy/gitify/issues/3153)) ([78b15b8](https://github.com/setchy/gitify/commit/78b15b8101f5106538b3dffa2a79d91394c9c7c3))
* **deps-core:** update @octokit/request to v10.0.14 ([#3211](https://github.com/setchy/gitify/issues/3211)) ([4591166](https://github.com/setchy/gitify/commit/45911664b0e22ff19f7cd5905cd7562c2c5d7adc))
* **deps-core:** update @octokit/request to v10.0.15 ([#3223](https://github.com/setchy/gitify/issues/3223)) ([7c74375](https://github.com/setchy/gitify/commit/7c74375ecbbaa67c8f619bb6193d46e9f0a8bdfe))
* **deps-core:** update @octokit/types to v18 ([#3248](https://github.com/setchy/gitify/issues/3248)) ([1d185fb](https://github.com/setchy/gitify/commit/1d185fb962755c2fbef1e8e0f6b0309000c97f63))
* **deps-core:** update @primer/css to v22.3.1 ([#3300](https://github.com/setchy/gitify/issues/3300)) ([1cb38d2](https://github.com/setchy/gitify/commit/1cb38d2c83b946726f7b7f4bb7b7469652200556))
* **deps-core:** update @primer/css to v22.3.2 ([#3328](https://github.com/setchy/gitify/issues/3328)) ([43d3532](https://github.com/setchy/gitify/commit/43d353243c3018fd14bfb6e1184a278a49907d5b))
* **deps-core:** update @primer/octicons-react to v19.32.0 ([#3140](https://github.com/setchy/gitify/issues/3140)) ([f2cc4f3](https://github.com/setchy/gitify/commit/f2cc4f3b7a1b3cbdd7c8eef19912d579cb24551c))
* **deps-core:** update @primer/octicons-react to v19.33.0 ([#3193](https://github.com/setchy/gitify/issues/3193)) ([4f494cb](https://github.com/setchy/gitify/commit/4f494cbdffd9bcd4c130e167ad096b11b3c95f1f))
* **deps-core:** update @primer/octicons-react to v19.35.0 ([#3305](https://github.com/setchy/gitify/issues/3305)) ([cf300ed](https://github.com/setchy/gitify/commit/cf300ed9e1f5ef2180f1283d1650adb698a3e8f8))
* **deps-core:** update @primer/octicons-react to v19.38.0 ([#3331](https://github.com/setchy/gitify/issues/3331)) ([8ea939f](https://github.com/setchy/gitify/commit/8ea939f745f794e9e631281aee3b5efcc35571cb))
* **deps-core:** update @primer/react to v38.35.0 ([#3165](https://github.com/setchy/gitify/issues/3165)) ([8099038](https://github.com/setchy/gitify/commit/809903807ff5a1e7987316258a1ea5520e7fa84e))
* **deps-core:** update @primer/react to v38.35.1 ([#3186](https://github.com/setchy/gitify/issues/3186)) ([b8c3d03](https://github.com/setchy/gitify/commit/b8c3d03387629672bca66deb4fedbb0c993443f4))
* **deps-core:** update @primer/react to v38.36.0 ([#3219](https://github.com/setchy/gitify/issues/3219)) ([ec10db1](https://github.com/setchy/gitify/commit/ec10db1ac999a4a3d8c5ee9040601557fc69f5ba))
* **deps-core:** update @primer/react to v38.37.0 ([#3269](https://github.com/setchy/gitify/issues/3269)) ([05eb43e](https://github.com/setchy/gitify/commit/05eb43e4e8f10cd80ecb3fbf482e563cc3d546ca))
* **deps-core:** update @primer/react to v38.38.0 ([#3286](https://github.com/setchy/gitify/issues/3286)) ([22ddd2b](https://github.com/setchy/gitify/commit/22ddd2b21ac484eae93c0f28f9856ca3dbf1722f))
* **deps-core:** update @primer/react to v38.39.0 ([#3306](https://github.com/setchy/gitify/issues/3306)) ([9c2ac87](https://github.com/setchy/gitify/commit/9c2ac87f9670a7da8c6102dd2e5a2e1faa1c1e24))
* **deps-core:** update @primer/react to v38.40.0 ([#3332](https://github.com/setchy/gitify/issues/3332)) ([4e814ab](https://github.com/setchy/gitify/commit/4e814abd0b3032c6c6320a8d14ffdf1a4aa079ff))
* **deps-core:** update electron to v43.3.0 ([#3166](https://github.com/setchy/gitify/issues/3166)) ([b04806d](https://github.com/setchy/gitify/commit/b04806d1fe73dfad2ec2fda9f139c20e442f199c))
* **deps-core:** update electron to v43.4.0 ([#3194](https://github.com/setchy/gitify/issues/3194)) ([7339ce0](https://github.com/setchy/gitify/commit/7339ce0bfeda1fc0a1dc94a04d0d060f102854ff))
* **deps-core:** update electron to v43.5.1 ([#3265](https://github.com/setchy/gitify/issues/3265)) ([af9c3df](https://github.com/setchy/gitify/commit/af9c3df49057f1c6483486e09af6149e235be5d6))
* **deps-core:** update electron to v44.1.0 ([#3267](https://github.com/setchy/gitify/issues/3267)) ([70f3bd2](https://github.com/setchy/gitify/commit/70f3bd22206387d77d972fe246eccb6361ff77a7))
* **deps-core:** update electron to v44.1.1 ([#3270](https://github.com/setchy/gitify/issues/3270)) ([23afa70](https://github.com/setchy/gitify/commit/23afa704e595f4f409aa9148141dfb1163dbd834))
* **deps-core:** update electron to v44.2.0 ([#3291](https://github.com/setchy/gitify/issues/3291)) ([e005c55](https://github.com/setchy/gitify/commit/e005c556248eaff7c0a135c85702d063e68c6f40))
* **deps-core:** update electron to v44.3.0 ([#3307](https://github.com/setchy/gitify/issues/3307)) ([9f0ca90](https://github.com/setchy/gitify/commit/9f0ca905b78da0977f2953c72ba50fc0c026ef2c))
* **deps-core:** update electron to v44.4.5 ([#3333](https://github.com/setchy/gitify/issues/3333)) ([302c90f](https://github.com/setchy/gitify/commit/302c90f2c83a4bed68e0150b6045e57185e796fa))
* **deps-core:** update electron-menubar to v10.1.8 ([#3128](https://github.com/setchy/gitify/issues/3128)) ([43ee413](https://github.com/setchy/gitify/commit/43ee41352219b2b1facefd1456f92bb0911b7465))
* **deps-core:** update electron-menubar to v10.2.1 ([#3209](https://github.com/setchy/gitify/issues/3209)) ([c26fe64](https://github.com/setchy/gitify/commit/c26fe64465fc5807d47b104f826827434a7e3ada))
* **deps-core:** update electron-menubar to v11.1.0 ([#3341](https://github.com/setchy/gitify/issues/3341)) ([7ee353a](https://github.com/setchy/gitify/commit/7ee353aaf7be13bbfdfeddb4886a00478b294dbd))
* **deps-core:** update octokit ([#3258](https://github.com/setchy/gitify/issues/3258)) ([3600bf4](https://github.com/setchy/gitify/commit/3600bf4e48762ff701011db16b41d31b8339a32e))
* **deps-core:** update octokit monorepo ([#3150](https://github.com/setchy/gitify/issues/3150)) ([e95a2d6](https://github.com/setchy/gitify/commit/e95a2d614e7482601a8fb71965c9c78aabe21bc6))
* **deps-core:** update octokit packages to types v17 and rest-endpoint-methods v18 ([#3162](https://github.com/setchy/gitify/issues/3162)) ([cace429](https://github.com/setchy/gitify/commit/cace42979eb2c916536b380ff755ae1740120547))

## [7.8.0](https://github.com/gitify-app/gitify/compare/v7.7.1...v7.8.0) (2026-09-06)


### 🚀 Features

* **metrics:** use new Issue Relates To Icon for linked issues pill ([#3277](https://github.com/gitify-app/gitify/issues/3277)) ([ed2dc66](https://github.com/gitify-app/gitify/commit/ed2dc665ecf4ed5c6c745f3bf2d8dd5282dbcbee))
* use menubar-managed popup behavior ([#3280](https://github.com/gitify-app/gitify/issues/3280)) ([168c541](https://github.com/gitify-app/gitify/commit/168c54194b7d4bedbd072953885944ec25da842e))


### 🧼 Code Refactoring

* **api:** orderby reviews no longer supported ([#3278](https://github.com/gitify-app/gitify/issues/3278)) ([f8ca915](https://github.com/gitify-app/gitify/commit/f8ca9151c0ed540434e0bcdfcead57b6de5c736c))
* **forges:** bind account-scoped adapter operations via getAccountAdapter ([#3266](https://github.com/gitify-app/gitify/issues/3266)) ([525386e](https://github.com/gitify-app/gitify/commit/525386e43339a4c82263979f987742ea0cf534ed))


### 📦 Dependency Updates (Core)

* **deps-core:** update electron to v44.1.1 ([#3270](https://github.com/gitify-app/gitify/issues/3270)) ([23afa70](https://github.com/gitify-app/gitify/commit/23afa704e595f4f409aa9148141dfb1163dbd834))

## [7.7.1](https://github.com/gitify-app/gitify/compare/v7.7.0...v7.7.1) (2026-09-04)


### 🐛 Bug Fixes

* ci vp run args ([7a41c8d](https://github.com/gitify-app/gitify/commit/7a41c8dd39d150cf28b96e6080e41d25e78fda66))
* ci vp run args ([#3250](https://github.com/gitify-app/gitify/issues/3250)) ([9154444](https://github.com/gitify-app/gitify/commit/91544449fea7f329a1977bdae6a49bbae5537b20))
* **gitlab:** list required fine-grained permissions and surface login errors ([#3264](https://github.com/gitify-app/gitify/issues/3264)) ([4cee724](https://github.com/gitify-app/gitify/commit/4cee72491a40a6e8f28d872a6355e7fea1826a16))


### 🧼 Code Refactoring

* replace `cn` util with dep ([#3256](https://github.com/gitify-app/gitify/issues/3256)) ([14eb005](https://github.com/gitify-app/gitify/commit/14eb0051bfb0ece5d1076359d3352157dfeff5e8))
* **shortcuts:** forge specific issue and pull request urls ([#3255](https://github.com/gitify-app/gitify/issues/3255)) ([730f517](https://github.com/gitify-app/gitify/commit/730f517203a4ade3914be59642430817b81e5a66))


### 📚 Documentation

* specific workflow badges ([904b0a9](https://github.com/gitify-app/gitify/commit/904b0a9bb0519997e2afc164dcb1cd73d4f58a4a))
* update gh templates ([#3254](https://github.com/gitify-app/gitify/issues/3254)) ([7ee14d0](https://github.com/gitify-app/gitify/commit/7ee14d005286b270edbfbe9345379b23cd11e318))


### 🤖 Continuous Integration

* explicit `.nvmrc` ([986b681](https://github.com/gitify-app/gitify/commit/986b681c065d4d3f26258a82f915cb52b9f3eff8))
* explicit `.nvmrc` ([#3251](https://github.com/gitify-app/gitify/issues/3251)) ([12d4fca](https://github.com/gitify-app/gitify/commit/12d4fca463cd1e0b9dd8e9eea8a7b36f34da0d45))
* use setup-vp for JavaScript tooling ([#3245](https://github.com/gitify-app/gitify/issues/3245)) ([3c9e6dc](https://github.com/gitify-app/gitify/commit/3c9e6dc507b2035da9457aeb4d30d185eed8546c))


### 📦 Dependency Updates (Core)

* **deps-core:** update @octokit/openapi-types to v29 ([#3241](https://github.com/gitify-app/gitify/issues/3241)) ([fc08ce2](https://github.com/gitify-app/gitify/commit/fc08ce28c5c43cb34be395817d5e0d5072c3cb1d))
* **deps-core:** update @octokit/openapi-types to v29.0.1 ([#3246](https://github.com/gitify-app/gitify/issues/3246)) ([2054df0](https://github.com/gitify-app/gitify/commit/2054df0afc7c403208b52f6780924c7ad827b19e))
* **deps-core:** update @octokit/types to v18 ([#3248](https://github.com/gitify-app/gitify/issues/3248)) ([1d185fb](https://github.com/gitify-app/gitify/commit/1d185fb962755c2fbef1e8e0f6b0309000c97f63))
* **deps-core:** update @primer/react to v38.37.0 ([#3269](https://github.com/gitify-app/gitify/issues/3269)) ([05eb43e](https://github.com/gitify-app/gitify/commit/05eb43e4e8f10cd80ecb3fbf482e563cc3d546ca))
* **deps-core:** update electron to v43.5.1 ([#3265](https://github.com/gitify-app/gitify/issues/3265)) ([af9c3df](https://github.com/gitify-app/gitify/commit/af9c3df49057f1c6483486e09af6149e235be5d6))
* **deps-core:** update electron to v44.1.0 ([#3267](https://github.com/gitify-app/gitify/issues/3267)) ([70f3bd2](https://github.com/gitify-app/gitify/commit/70f3bd22206387d77d972fe246eccb6361ff77a7))
* **deps-core:** update octokit ([#3258](https://github.com/gitify-app/gitify/issues/3258)) ([3600bf4](https://github.com/gitify-app/gitify/commit/3600bf4e48762ff701011db16b41d31b8339a32e))

## [7.7.0](https://github.com/gitify-app/gitify/compare/v7.6.0...v7.7.0) (2026-08-26)


### 🚀 Features

* **forge:** add GitLab support ([#3225](https://github.com/gitify-app/gitify/issues/3225)) ([6711eb7](https://github.com/gitify-app/gitify/commit/6711eb71d6986cea6ac7f9e6363ca2d74e6ff081))
* **gitlab:** add brand icon and platform types ([c86e798](https://github.com/gitify-app/gitify/commit/c86e798a9061de363267b5a73a543b7c7ab36f46))
* **gitlab:** add forge adapter backed by the to-do API ([b917ac6](https://github.com/gitify-app/gitify/commit/b917ac63d3ad4307179980412bcafd434cb9f7a2))
* **gitlab:** add GitLabTodo subject type ([cb66678](https://github.com/gitify-app/gitify/commit/cb66678ee7a43ef1612eba4f5556a26c3b876654))
* **gitlab:** add personal access token login route ([fdefd7b](https://github.com/gitify-app/gitify/commit/fdefd7b3fa8f66ed7137209fcb66d4e65a4b8011))


### 🐛 Bug Fixes

* **deps:** declare Vitest test dependencies ([e34b6d8](https://github.com/gitify-app/gitify/commit/e34b6d87f8870ad08ad9ca87b594d17386142fad))
* **gitlab:** bound to-do pagination ([8c2fbe5](https://github.com/gitify-app/gitify/commit/8c2fbe50f559ed594726867999ba970d8f380b9d))
* **gitlab:** correct the to-do actor, draft state and action mappings ([fa12e89](https://github.com/gitify-app/gitify/commit/fa12e89decec2affc3cb9e546b00c3471e7951de))
* **gitlab:** remove the duplicate mark-as-done action ([364e125](https://github.com/gitify-app/gitify/commit/364e1252e5516c94854578a9d83c5fe8346de192))
* **notifications:** keep the GitLab brand name in the subject type label ([f54bf69](https://github.com/gitify-app/gitify/commit/f54bf69a0304e55ee0339e01e489a39229fd938b))


### 🧼 Code Refactoring

* **gitlab:** fetch login metadata in parallel and log dropped failures ([7b34c09](https://github.com/gitify-app/gitify/commit/7b34c0989d4ae9e03d0aa4fab409a662c5c10cf0))


### 📚 Documentation

* add GitLab to the supported forge matrix ([7c3a465](https://github.com/gitify-app/gitify/commit/7c3a465e6e38d40c866235a845a556b5b2ff2e38))
* assign GitLab forge maintainer and codeowner ([cad5e7d](https://github.com/gitify-app/gitify/commit/cad5e7d9f00a9c00d65bbf35f77c615c3474bec1))

## [7.6.0](https://github.com/gitify-app/gitify/compare/v7.5.0...v7.6.0) (2026-08-26)


### 🚀 Features

* **linux:** add opt-in X11 backend for tray-anchored positioning ([#3218](https://github.com/gitify-app/gitify/issues/3218)) ([d7df927](https://github.com/gitify-app/gitify/commit/d7df92723a68c029b374d575f08986d7a00127db))
* **updater:** add setting to opt-out of update notifications ([#3201](https://github.com/gitify-app/gitify/issues/3201)) ([54cf67a](https://github.com/gitify-app/gitify/commit/54cf67a1659f0899d9226e8e2062ddb5dfd56978))


### 📚 Documentation

* Update CONTRIBUTING.md ([d0a462b](https://github.com/gitify-app/gitify/commit/d0a462b9b0e4b869c93a5ece06ed2d95cfc8a720))


### 📦 Dependency Updates (Core)

* **deps-core:** update @octokit/request to v10.0.15 ([#3223](https://github.com/gitify-app/gitify/issues/3223)) ([7c74375](https://github.com/gitify-app/gitify/commit/7c74375ecbbaa67c8f619bb6193d46e9f0a8bdfe))
* **deps-core:** update @primer/react to v38.36.0 ([#3219](https://github.com/gitify-app/gitify/issues/3219)) ([ec10db1](https://github.com/gitify-app/gitify/commit/ec10db1ac999a4a3d8c5ee9040601557fc69f5ba))

## [7.5.0](https://github.com/gitify-app/gitify/compare/v7.4.0...v7.5.0) (2026-08-22)


### 🚀 Features

* **github:** improve pr enriched data ([#3204](https://github.com/gitify-app/gitify/issues/3204)) ([13aeba7](https://github.com/gitify-app/gitify/commit/13aeba72cc6f049b773f4597d50f6e3a69aaa260))


### 🐛 Bug Fixes

* **deps-core:** pin electron to 43.2.0 to restore Linux tray icons ([#3208](https://github.com/gitify-app/gitify/issues/3208)) ([73fb716](https://github.com/gitify-app/gitify/commit/73fb716da6ca219f36952bb3898a0d37327f592d))
* menubar icon state ([#3205](https://github.com/gitify-app/gitify/issues/3205)) ([9b08a09](https://github.com/gitify-app/gitify/commit/9b08a097f665b1e80fd0a979bd4e69913a14d1f5))

## [7.4.0](https://github.com/gitify-app/gitify/compare/v7.3.3...v7.4.0) (2026-08-16)


### 🚀 Features

* **github:** format and render Bot account names ([#3183](https://github.com/gitify-app/gitify/issues/3183)) ([12efd18](https://github.com/gitify-app/gitify/commit/12efd18d1ac4437c90c855fe07fddf9bfa0445ca))
* **github:** update actor display names (managed and unmanaged) ([#3182](https://github.com/gitify-app/gitify/issues/3182)) ([5353e92](https://github.com/gitify-app/gitify/commit/5353e9231ba40df87e4b8a56e696f5b7c030c6be))
* **metrics:** improve pr review metric pill ([#3184](https://github.com/gitify-app/gitify/issues/3184)) ([9db47c8](https://github.com/gitify-app/gitify/commit/9db47c879a9967765fb7a84fb8e20363c16d5ec8))


### 🐛 Bug Fixes

* **forge/github:** sanitize gql query docs based on gated feature compatibility ([#3178](https://github.com/gitify-app/gitify/issues/3178)) ([6ae87ca](https://github.com/gitify-app/gitify/commit/6ae87cad593e762edc7a54aa0bc3cba1cb34cc78))

## [7.3.3](https://github.com/gitify-app/gitify/compare/v7.3.2...v7.3.3) (2026-08-12)


### 🐛 Bug Fixes

* **metrics:** fetch stacked pr metrics only for GitHub Cloud ([#3175](https://github.com/gitify-app/gitify/issues/3175)) ([bfd2672](https://github.com/gitify-app/gitify/commit/bfd267267960d9b5254594de7d98f39e38deff9f))

## [7.3.2](https://github.com/gitify-app/gitify/compare/v7.3.1...v7.3.2) (2026-08-09)


### 🐛 Bug Fixes

* keep the scroll fade ramping in packaged builds ([#3170](https://github.com/gitify-app/gitify/issues/3170)) ([ef2aec0](https://github.com/gitify-app/gitify/commit/ef2aec062f27de8b54b01394696c492825b90fa9))

## [7.3.1](https://github.com/gitify-app/gitify/compare/v7.3.0...v7.3.1) (2026-08-08)


### 🐛 Bug Fixes

* restart to install update, and three update-flow bugs ([#3167](https://github.com/gitify-app/gitify/issues/3167)) ([01fed23](https://github.com/gitify-app/gitify/commit/01fed233f579a802ae2c03150095485714e777c8))

## [7.3.0](https://github.com/gitify-app/gitify/compare/v7.2.0...v7.3.0) (2026-08-08)


### 🚀 Features

* **metrics:** add pills for issue and stacked ([#3159](https://github.com/gitify-app/gitify/issues/3159)) ([c0b8718](https://github.com/gitify-app/gitify/commit/c0b8718e23f66faaf89212207201e2b38d27b2ea))
* **theme:** add a Glass option to show status icon colors ([19fa9fd](https://github.com/gitify-app/gitify/commit/19fa9fddf9222f028ebfaa6ce1d1390980058871))
* **theme:** add a Glass option to show status icon colors ([#3158](https://github.com/gitify-app/gitify/issues/3158)) ([a17ca8a](https://github.com/gitify-app/gitify/commit/a17ca8ac708ab6daa0286b966c50d4737956573c))
* **theme:** add design-language chrome token layer via [@theme](https://github.com/theme) inline ([f21a27a](https://github.com/gitify-app/gitify/commit/f21a27a63f3c782ee3115c9b494e71c30fe0b9d5))
* **theme:** add design-language settings axis with Classic/Glass selector ([21e4c9a](https://github.com/gitify-app/gitify/commit/21e4c9ac34e351f4c5e2a590d99168235597c98d))
* **theme:** add Glass design language ([#3130](https://github.com/gitify-app/gitify/issues/3130)) ([3505bbe](https://github.com/gitify-app/gitify/commit/3505bbec526cfc0125bfa31e8318f78918aa7eea))
* **theme:** add Glass shell surfaces with per-platform material branch ([b4c1e5e](https://github.com/gitify-app/gitify/commit/b4c1e5e25a22468b011428b3e9ad05cbb9d4564d))
* **theme:** add useAppearance hook with design-language root attributes ([83126c1](https://github.com/gitify-app/gitify/commit/83126c1c8d977c4f4b515735dd1de3a9ed891b07))
* **theme:** apply Glass to controls, list rows, and overlays ([fe3afab](https://github.com/gitify-app/gitify/commit/fe3afab181d362e778495e161c725417f9ae5ace))
* **theme:** bare the Glass account-profile button inside account cards ([22ab3d0](https://github.com/gitify-app/gitify/commit/22ab3d0a86c54e0330608a9f6fd675cd9b1203d0))
* **theme:** degrade Glass to solid under reduced transparency / contrast ([e5859d6](https://github.com/gitify-app/gitify/commit/e5859d61e8bc7344e539892216fdf32017389a0c))
* **theme:** desaturate Glass status palette toward a native tone ([627957e](https://github.com/gitify-app/gitify/commit/627957e87ee7b53b34f0d5e7275262a187db84c2))
* **theme:** dissolve sidebar into unified Glass and mute the primary CTA ([d9065bd](https://github.com/gitify-app/gitify/commit/d9065bdb00bbf66aa9cef43db41f23970911b85f))
* **theme:** float the Glass account header directly on the glass ([3aa607a](https://github.com/gitify-app/gitify/commit/3aa607a51ecaf8c3114197db8adcc1c9119b3593))
* **theme:** lighten Glass tints, soften blur, and use a translucent nav selection ([fb7fae2](https://github.com/gitify-app/gitify/commit/fb7fae21c6cba44353d21319c28b981c27a32d7b))
* **theme:** make Glass translucency always-on and add a visible sidebar divider ([86dcbf9](https://github.com/gitify-app/gitify/commit/86dcbf9c98d057443ccf489b3ecb0da373e278af))
* **theme:** make the sidebar logo follow the icon colour under Glass ([80b6298](https://github.com/gitify-app/gitify/commit/80b6298347b809ed390c0eeb5af06aa6753d94d6))
* **theme:** re-add high contrast for Classic, driven by the setting and the OS ([1446862](https://github.com/gitify-app/gitify/commit/1446862f5ed199dabe021c8b6ee94d97c7c195c9))
* **theme:** refine Glass surfaces ([26a88db](https://github.com/gitify-app/gitify/commit/26a88db642f0049fbc6397ca3d5eba205a941534))
* **theme:** soften notification grouping bands and count pills under Glass ([10db05d](https://github.com/gitify-app/gitify/commit/10db05d5e60aded26ff7832b55ef524d4dd9b113))
* **theme:** wire macOS window vibrancy via IPC for Glass ([8ecbe70](https://github.com/gitify-app/gitify/commit/8ecbe701746e90027c7d5d964b7ed50db2a2f2b3))
* **ui:** fade scrollable content at the top and bottom edges ([#3124](https://github.com/gitify-app/gitify/issues/3124)) ([cd6a1ad](https://github.com/gitify-app/gitify/commit/cd6a1ad8435f261318c21ddef87706204e1b7ec3))


### 🐛 Bug Fixes

* **bitbucket:** fallback for missing notification URLs ([#3131](https://github.com/gitify-app/gitify/issues/3131)) ([0fbe08f](https://github.com/gitify-app/gitify/commit/0fbe08f732dfdf2eaf0125b838fca801d8d4ed0a))
* correct online state on startup instead of waiting for a network event ([#3147](https://github.com/gitify-app/gitify/issues/3147)) ([1110bde](https://github.com/gitify-app/gitify/commit/1110bdea52018e0a31b3a7614f36c6aa1bda193e))
* online state ([3d45a5d](https://github.com/gitify-app/gitify/commit/3d45a5d77f775e6cf3b1a3ef3f9c824fd4df2cb1))
* rollback failed notification interaction with visual warning ([#3145](https://github.com/gitify-app/gitify/issues/3145)) ([cfa12a2](https://github.com/gitify-app/gitify/commit/cfa12a24ef2b93ff8d4edf8eaaccea24cd808130))
* seed online status from the online manager on first render ([b5f72e2](https://github.com/gitify-app/gitify/commit/b5f72e276f761df7bf6a3f24c4be345f045e1d5b))
* sonarqube issues ([046bb8e](https://github.com/gitify-app/gitify/commit/046bb8ecf6b5a5073b97b6b7aa3e91ada8befe22))
* **theme:** construct a transparent vibrant window on macOS so Glass material shows ([9cc01ea](https://github.com/gitify-app/gitify/commit/9cc01ea3df7aaced3287949c056b5635e902cbfd))
* **theme:** harden the native-theme sync ([9b3df25](https://github.com/gitify-app/gitify/commit/9b3df2524148c75cff5c8423c139d1a55a29ab00))
* **theme:** keep Glass status icons monochrome ([39744c0](https://github.com/gitify-app/gitify/commit/39744c01e0a704844687dd940bf1e8cf343005c0))
* **theme:** keep Glass translucent after a runtime Classic to Glass switch ([f926d56](https://github.com/gitify-app/gitify/commit/f926d56c02eebe594cb7ed40807c2be0cd5d172e))
* **theme:** make Glass vibrancy show the real desktop on macOS ([11433a1](https://github.com/gitify-app/gitify/commit/11433a131de2146fed642444eca0a996d3fc0ddc))
* **theme:** resolve Glass tokens under the System theme ([5242380](https://github.com/gitify-app/gitify/commit/5242380e59e1a830a4c4458d8517008eb9f49ab4))
* **theme:** resolve the base colour tokens under the System theme ([3d77d37](https://github.com/gitify-app/gitify/commit/3d77d37d28907f468e524edc60bf923336470c58))
* **theme:** restore the notification status icon colours ([850f7c0](https://github.com/gitify-app/gitify/commit/850f7c00787a5ba95ea49cb40767ad212625530f))


### 🧼 Code Refactoring

* **api:** configure gc and stale time ([#3146](https://github.com/gitify-app/gitify/issues/3146)) ([a9c0021](https://github.com/gitify-app/gitify/commit/a9c0021db9653412841457e5ca87152a9195a265))
* **bitbucket:** simplify repo url transform ([#3133](https://github.com/gitify-app/gitify/issues/3133)) ([c15b323](https://github.com/gitify-app/gitify/commit/c15b3230a9139f501ccd07f9a1aa17a6549993aa))
* **components:** import Primer directly instead of the ui barrel ([da34ca4](https://github.com/gitify-app/gitify/commit/da34ca49b7cf2faf50fed5aba95ac864e70d672f))
* correct online state before any query can run ([223992f](https://github.com/gitify-app/gitify/commit/223992f8560f6cf78de1496bdc2fb616fd4f724a))
* **settings:** drop the redundant "value display" comments ([a421629](https://github.com/gitify-app/gitify/commit/a421629e8256303446c210b4e02ec43773575460))
* simplify bitbucket repo url ([c15b323](https://github.com/gitify-app/gitify/commit/c15b3230a9139f501ccd07f9a1aa17a6549993aa))
* **theme:** drop the redundant light-dark scoping comment ([6c03cf7](https://github.com/gitify-app/gitify/commit/6c03cf7c5429d3d587f8429fa96164589f6c6591))
* **theme:** route renderer through app-owned ui/ layer with import boundary ([ab9fc5b](https://github.com/gitify-app/gitify/commit/ab9fc5b586ee41879afc02f6325c290c692b7d9f))
* **theme:** source the base colour tokens from Primer ([#3148](https://github.com/gitify-app/gitify/issues/3148)) ([28a3566](https://github.com/gitify-app/gitify/commit/28a3566af0ed4e6d68287d28f26807ac1361b637))
* **theme:** trim non-essential comments ([90dc3f3](https://github.com/gitify-app/gitify/commit/90dc3f3cff31a490e0fb84fca592db56df82ad81))


### 🤖 Continuous Integration

* deploy website after the release pipeline publishes ([#3123](https://github.com/gitify-app/gitify/issues/3123)) ([da807d2](https://github.com/gitify-app/gitify/commit/da807d2b8f9e5a4889a358ae495850657b24aeb2))
* format contributors section as unordered list ([#3126](https://github.com/gitify-app/gitify/issues/3126)) ([a9726d3](https://github.com/gitify-app/gitify/commit/a9726d30ae244e49fa7051d845fb4366407b4ecd))
* skip release PR generation when a release was just created ([#3120](https://github.com/gitify-app/gitify/issues/3120)) ([4fc6f83](https://github.com/gitify-app/gitify/commit/4fc6f8316e76fe7e33e887b735c768d689bd4574))

## [7.2.0](https://github.com/gitify-app/gitify/compare/v7.1.1...v7.2.0) (2026-07-29)


### 🚀 Features

* **macos:** launch as an agent app so no dock tile is ever created ([#3117](https://github.com/gitify-app/gitify/issues/3117)) ([b60df93](https://github.com/gitify-app/gitify/commit/b60df9345772d94d1e34acf730dae42a7c4851ae))


### 🐛 Bug Fixes

* **notifications:** drop subject type suffix from native notification body ([#3113](https://github.com/gitify-app/gitify/issues/3113)) ([585a2a9](https://github.com/gitify-app/gitify/commit/585a2a9e4781f12d2559726bb2020ca841922ae8))


### ⚡️ Performance

* **notifications:** refresh enriched details when window regains focus ([#3118](https://github.com/gitify-app/gitify/issues/3118)) ([ffc699c](https://github.com/gitify-app/gitify/commit/ffc699cc1ac8fffaa3e03182e6ce65ef008b7f1a))
* **notifications:** respect server-recommended poll interval ([#3116](https://github.com/gitify-app/gitify/issues/3116)) ([ea302a5](https://github.com/gitify-app/gitify/commit/ea302a5aa70d38b92317cb3005670ea27f26a976))
* **notifications:** skip re-enrichment of unchanged notifications ([#3102](https://github.com/gitify-app/gitify/issues/3102)) ([2ff02e1](https://github.com/gitify-app/gitify/commit/2ff02e148bc43960860271d4c4b9b54d767e7d01))


### 🧼 Code Refactoring

* vite config ([#3110](https://github.com/gitify-app/gitify/issues/3110)) ([d09ef0a](https://github.com/gitify-app/gitify/commit/d09ef0a05ac2260ee95f8f3d08e524dcb43a7723))


### 🤖 Continuous Integration

* add `core-deps` scope to surface within release-please generated changelog/release notes ([#3114](https://github.com/gitify-app/gitify/issues/3114)) ([672ce07](https://github.com/gitify-app/gitify/commit/672ce07a0a79573f7d244aaa4bfca8b50455d5d1))
* add release labeling ([#3112](https://github.com/gitify-app/gitify/issues/3112)) ([32aaf29](https://github.com/gitify-app/gitify/commit/32aaf29d1a89b3b7e684a5b12f84253f09a2ca0e))
* credit contributors in published release notes ([#3109](https://github.com/gitify-app/gitify/issues/3109)) ([968715f](https://github.com/gitify-app/gitify/commit/968715f7f6e35768c036cf97c14a3dd5682cc981))
* defer release-please PR creation while a draft release is pending ([#3108](https://github.com/gitify-app/gitify/issues/3108)) ([25d7f9b](https://github.com/gitify-app/gitify/commit/25d7f9bcb6c2a3aa3b43d11c9c3b3677034f81d7))

## [7.1.1](https://github.com/gitify-app/gitify/compare/v7.1.0...v7.1.1) (2026-07-29)


### 🐛 Bug Fixes

* re-hide macos dock icon after parentless dialogs ([#3100](https://github.com/gitify-app/gitify/issues/3100)) ([8f4b33a](https://github.com/gitify-app/gitify/commit/8f4b33a54ccdbfc9295ed4cdf35528cf3adfdd08))


### 🏗️ Build System

* update labeler for perf semantic commit type ([#3105](https://github.com/gitify-app/gitify/issues/3105)) ([9d29de4](https://github.com/gitify-app/gitify/commit/9d29de427cb9d9dcc91193b307ffd6558905200c))


### 🤖 Continuous Integration

* publish draft release by id to avoid HTTP 422 on tag lookup ([#3098](https://github.com/gitify-app/gitify/issues/3098)) ([c83528d](https://github.com/gitify-app/gitify/commit/c83528dd93b0239aa26e9650547628ef4dc7c024))
* update perf emoji ([b6c9c6e](https://github.com/gitify-app/gitify/commit/b6c9c6ef8683749fa816eefc30ecf55d8b997938))

## [7.1.0](https://github.com/gitify-app/gitify/compare/v7.0.1...v7.1.0) (2026-07-27)


### 🚀 Features

* **notifications:** include repository name and subject type in native Windows OS notifications ([#3058](https://github.com/gitify-app/gitify/issues/3058)) ([ec0701c](https://github.com/gitify-app/gitify/commit/ec0701c00a6c7359f2425ef48691fb7a71e2bb17))


### 🐛 Bug Fixes

* drop cached forge clients on app reset ([#3071](https://github.com/gitify-app/gitify/issues/3071)) ([316ab00](https://github.com/gitify-app/gitify/commit/316ab003329a8fcc04578d795006514df8a3b454))


### 🧼 Code Refactoring

* retire fetch type notification setting ([#3070](https://github.com/gitify-app/gitify/issues/3070)) ([94f37e2](https://github.com/gitify-app/gitify/commit/94f37e2f09b52384fbb0edc02c9153615387c6f6))


### 🤖 Continuous Integration

* add emoji prefixes to release-please changelog sections ([#3095](https://github.com/gitify-app/gitify/issues/3095)) ([47ec087](https://github.com/gitify-app/gitify/commit/47ec08709845e38e2a7c7285b48a4dec7ce3446b))
