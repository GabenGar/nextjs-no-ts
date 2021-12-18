# NextJS project (no typescript)

## Installation

1. Initiate nextjs project:
   ```sh
   npx create next-app . --use-npm
   ```
2. Add page layout component as per [related article](https://nextjs.org/docs/basic-features/layouts)
3. Add custom [`_app`](https://nextjs.org/docs/advanced-features/custom-app) and [`__document`](https://nextjs.org/docs/advanced-features/custom-document) files
4. Install `ESLint` and `Prettier`:
   1. `ESLint` comes preinstalled on `nextjs` 11+
   2. Install `Prettier`:
      ```sh
      npm install --save-dev --save-exact prettier
      ```
   3. Create prettier config:
      ```sh
      echo {}> .prettierrc.json
      ```
   4. Create `.prettierignore` with these contents:
      ```sh
      .next
      public
      ```
   5. Install `eslint-config-prettier` package:
   ```sh

   ```
   6. Extend ESLint config:
   ```sh
     "extends": ["next", "prettier"]
   ```
5. Set up precommit hooks:
6. Install `husky` and `lint-staged`:
   ```sh
   npm install --save-dev husky lint-staged
   ```
7. Add this line to `package.json` and run it as a script:
   ```json
   "scripts": {
     "prepare": "husky install",
     ...
   }
   ```
   ```sh
   npm run prepare
   ```
8. Add a pre-commit script:
   ```sh
   npx husky add .husky/pre-commit "npx lint-staged"
   ```
   If it doesn't work, run `npx husky-init` and then paste `npx lint-staged` into `.husky/pre-commit`.
9.

## IDE-specific

1. Install [`ESLint` plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Install [`Prettier` plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. Make `Prettier` the default formatter for the project by adding these lines to `.vscode/settings.json`:
   ```json
   {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "[javascript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[javascriptreact]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[json]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     }
   }
   ```
4. Optionally configure format on autosave:
   ```json
   {
     "editor.formatOnSave": false,
     "[javascript]": {
       "editor.formatOnSave": false
     }
   }
   ```
