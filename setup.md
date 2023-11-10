# Setup

```bash
 npx create-nx-workspace@14.8.9 nx-affected-poc
```

The output:

```bash
√ What to create in the new workspace · apps
√ Enable distributed caching to make your CI faster · Yes

 >  NX   Nx is creating your v14.8.9 workspace.

   To make sure the command works reliably in all environments, and that the preset is applied correctly,
   Nx will run "npm install" several times. Please wait.

√ Installing dependencies with npm
√ Nx has successfully created the workspace: nx-affected-poc.
√ NxCloud has been set up successfully
warning: in the working copy of '.editorconfig', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.prettierignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.prettierrc', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.vscode/extensions.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'nx.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tools/tsconfig.tools.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tsconfig.base.json', LF will be replaced by CRLF the next time Git touches it

 >  NX   Successfully initialized git.


 ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


 >  NX   Nx CLI is not installed globally.

   This means that you might have to use "yarn nx" or "npx nx" to execute commands in the workspace.
   Run "yarn global add nx" or "npm install -g nx" to be able to execute command directly.


 ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


 >  NX   First time using Nx? Check out this interactive Nx tutorial.

   https://nx.dev/core-tutorial/01-create-blog


 >  NX   Distributed caching via Nx Cloud has been enabled

   In addition to the caching, Nx Cloud provides config-free distributed execution,
   UI for viewing complex runs and GitHub integration. Learn more at https://nx.app

   Your workspace is currently unclaimed. Run details from unclaimed workspaces can be viewed on cloud.nx.app by anyone
   with the link. Claim your workspace at the following link to restrict access.

   https://cloud.nx.app/orgs/workspace-setup?accessToken=YWFlZmI4YTgtYzczNS00Njk3LTg1MzItNGI5MWVjNzU1YjMwfHJlYWQtd3JpdGU=
```

## Add Projects

 yarn nx generate @nrwl/angular:library library-for-app-one --style=scss --importPath=@affected/app-one-lib --no-interactive
 yarn nx generate @nrwl/angular:library library-for-app-two --style=scss --importPath=@affected/app-two-lib --no-interactive
 yarn nx generate @nrwl/angular:library library-for-app-three --style=scss --importPath=@affected/app-three-lib --no-interactive
 yarn nx generate @nrwl/angular:library shared-library --style=scss --importPath=@affected/shared-lib --no-interactive