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

### Design frameworks: Tailwind and HeadlessUi

-   TailwindCss: utility classes for fast prototyping
-   HeadlessUi: vue component framework that includes components that are fully unstyled, but feature and accessibility ready. Styling can be done with tailwind as they are from the same publisher.

### Internationalization support through vue-i18n

Installed plugins vue-i18n and @intlify/vite-plugin-vue-i18n to support translations. Created a root i18n file to import all the translation files into.

### Axios wrapper using vueUse package

Vue use package is a collection of useful composables. There is a composable called useAxios that is a wrapper for axios itself for ease of use.
