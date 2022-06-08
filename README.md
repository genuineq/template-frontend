# Vue 3 framework template with Vite

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run lint
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=vue.vscode-typescript-vue-plugin).

### Typescript support

Created the template using the npm init vue@latest which configures typescript by default. Had to adjust the tsconfig files in order to account for
all the issues that appeared. resolveJsonModule set to true in order to import json into typescript.

#### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Vite as a module bundler

Framework agnostic bundler that is a leaner and faster version of webpack. Good vue support through a multitude of plugins.

### Design frameworks:
#### Tailwind
Utility classes for fast prototyping

#### FormKit
A Vue form building framework that simplifies form structure, generation, validation, theming, submission, error handling, and more.

#### HeadlessUi
Vue component framework that includes components that are fully unstyled, but feature and accessibility ready. Styling can be done with tailwind as they are from the same publisher.

### Routing with vue router 4

Basic vue routing library from the vue ecosystem

### State management with Pinia

A leaner vuex with better typescript experience. Stores can be created the same way as in vuex (- mutations) or in a composition api like fashion (like setup function in options api). Each file is a store, not a module like in vuex, and there is no root store. Each store can be composed with another store.

### Internationalization support through vue-i18n

Installed plugins vue-i18n and @intlify/vite-plugin-vue-i18n to support translations. Created a root i18n file to import all the translation files into.

### VueUse package

VueUse is a collection of useful composables that wrap common apis and functionalities from the browser in simple functions.

#### - Axios wrapper

There is a composable called useAxios that is a wrapper for axios itself for ease of use.

#### - State persistence

With the help of the useLocalStorage composable, we have reactive and persisted state in pinia.

### Reusable components
Most of them are from formkit, but additionaly:

#### - Form components
-   Select: based on the headless ui combobox component, wip on some design stuff
-   Toggle: based on the headless ui switch component

#### - Common components

-   Modal: functional, but not ready
-   Alert: not implemented yet

### ESlint and Prettier setup

For linting I have used eslint and for formatting I have used prettier. Both have config files for overrides in the root of the folder. In addition to those two files, there is an additional file called .editorconfig that also does some formating for us on save.

### Common auth routes already done (login, register, recover and reset password, logout)

I have implemented a minimal setup for all the basic auth flow. The requests have been sent to the [template-backend](https://github.com/genuineq/template-backend) repo made with laravel.

### Packages and versions

#### Main dependencies

-   vue: ^3.2.32
-   vue-i18n: ^9.1.9
-   vue-router: ^4.0.14
-   pinia: ^2.0.13
-   axios: ^0.26.1
-   @headlessui/vue: ^1.5.0
-   @vueuse/core: ^8.2.5
-   @vueuse/integrations: ^8.2.5
-   uuid: ^8.3.2
-   @formkit/themes": ^1.0.0-beta.8,
-   @formkit/vue": ^1.0.0-beta.8,

#### Main dev dependencies

-   @intlify/vite-plugin-vue-i18n: ^3.4.0,
-   @rushstack/eslint-patch: ^1.1.0,
-   @tailwindcss/forms: ^0.5.0,
-   @types/jsdom: ^16.2.14,
-   @types/node: ^16.11.26,
-   @types/uuid: ^8.3.4,
-   @vitejs/plugin-vue: ^2.3.1,
-   @vue/eslint-config-prettier: ^7.0.0,
-   @vue/eslint-config-typescript: ^10.0.0,
-   @vue/test-utils: ^2.0.0-rc.18,
-   @vue/tsconfig: ^0.1.3,
-   autoprefixer: ^10.4.4,
-   eslint: ^8.5.0,
-   eslint-plugin-vue: ^8.2.0,
-   jsdom: ^19.0.0,
-   postcss: ^8.4.12,
-   prettier: ^2.5.1,
-   prettier-plugin-tailwindcss: ^0.1.8,
-   tailwindcss: ^3.0.23,
-   typescript: ~4.6.3,
-   vite: ^2.9.1,
-   vitest: ^0.8.1,
-   vue-tsc: ^0.33.9

### Folder structure (src)

-   assets: images, css and fonts
-   components: reusable components throughout the app
-   composables: reusable vue 3 specific functionality
-   locales: translation files
-   models: reusable typescript types and interfaces
-   router: routing configuration for the project
-   stores: contains pinia stores, each file is a store
-   utils: diverse utility functions
-   views: all the pages
-   theme.ts: theming file for formkit using tailwind utility classes
-   main.ts: vue starting point file
-   shims.d.ts: vue specific file to enable typescript
-   i18n.ts: internationalization plugin file

### How to use the template

I have set the project up in github as a template. Instead of cloning the project, github provides a button where you can start a new repository from this template.

### Environment variables
No environment variables until now.

### Docker setup
TODO


# Things to figure out for the template
- Issue in github regarding useLocalStorage in pinia store
- Issue in github regarding tailwindcss vs code extension not working in .ts files
- Issue in github regarding formkit @submit button
- FormKit Pro: they are currently working on further syntetic inputs like the following: "toggle, dropdown, autocomplete, tag list, repeater, multi-step wizard, star rating, button group, date range picker. After that we'll continue to roll out more." We could implement our own stuff until these get out. Unfortunately the pro version is going to be paid, but having every type of input from the same provider would be nice.
