# Vue 3 framwork template with Vite

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

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

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

### Design frameworks: Tailwind and HeadlessUi

-   TailwindCss: utility classes for fast prototyping
-   HeadlessUi: vue component framework that includes components that are fully unstyled, but feature and accessibility ready. Styling can be done with tailwind as they are from the same publisher.

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

#### - Form components

-   Input
-   Checkbox
-   Radio
-   RadioGroup: based on the headless ui radio group component
-   Select: based on the headless ui combobox component, wip on some design stuff
-   Toggle: based on the headless ui switch component

#### - Common components

-   Modal: functional, but not ready
-   Alert: not implemented yet
-   Tabs: not implemented yet

### ESlint and Prettier setup

For linting I have used eslint and for formatting I have used prettier. Both have config files for overrides in the root of the folder. In addition to those two files, there is an additional file calld .editorconfig that also does some formating for us on save.
