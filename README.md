# Vue 3 framework template with Vite

## Install guide
To create a local development setup follow the next steps:
1. Open the local `hosts` file and add the folowing content at the end of the file:
```
# Start of Autovantage
127.0.0.1       app.test
# End of Autovantage
```
2. Go to `docker` folder of the project
3. Create a copy of `.env.example` document and rename the copy to `.env`
4. In the `.env` file add the node version you want/require in the `ENV_NODE_VERSION` variable
5. In the `.env` add the port you use for development in the `ENV_NGINX_HOST_HTTP_PORT` variable
6. Build the container
```
docker-compose build
```
7. Start the containers
```
docker-compose up
```
8. Connect to the container:
```
docker-compose exec frontend bash
```
9. Run the following commands:
```
npm install
```
10. Finished!

---

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
npm run format
```

#### Even though we have commands for linting and formatting. This is done automatically per file on save.

---

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

---

## Recommended IDE Setup

IDE : [VSCode](https://code.visualstudio.com/)

---

## Main extensions

[Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar) (and disable Vetur): main extension for vue3
[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=vue.vscode-typescript-vue-plugin): typescript enabler for vue 3 projects

---

## Secondary extensions

[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): extension used for tailwind in order to have autocompletion
for tailwind classes, linting for errors and hover explanation for classes. One caveat. In order for tailwind to detect tailwind classes outside of html markup,
we have to add `/*tw*/` comment in front of that string in order for tailwind to detect those classes (see theme.ts file in src folder).
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): linting extension
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): formatting extension
[Format Code Action](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action): linting and formatting on save enabler.

## Typescript support

Created the template using the npm init vue@latest which configures typescript by default. Had to adjust the tsconfig files in order to account for
all the issues that appeared. resolveJsonModule set to true in order to import json into typescript.

---

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

---

## Vite as a module bundler

Framework agnostic bundler that is a leaner and faster version of webpack. Good vue support through a multitude of plugins.

---

### Design frameworks:

### Tailwind

Utility classes for fast prototyping

### FormKit

A Vue form building framework that simplifies form structure, generation, validation, theming, submission, error handling, and more.

### HeadlessUi

Vue component framework that includes components that are fully unstyled, but feature and accessibility ready. Styling can be done with tailwind as they are from the same publisher.

---

### Routing with vue router 4

Basic vue routing library from the vue ecosystem

---

### State management with Pinia

A leaner vuex with better typescript experience. Stores can be created the same way as in vuex (- mutations) or in a composition api like fashion (like setup function in options api). Each file is a store, not a module like in vuex, and there is no root store. Each store can be composed with another store.

---

### Internationalization support through vue-i18n

Installed plugins vue-i18n and @intlify/vite-plugin-vue-i18n to support translations. Created a root i18n file to import all the translation files into.

---

### VueUse package

VueUse is a collection of useful composables that wrap common apis and functionalities from the browser in simple functions.

#### - Axios wrapper

There is a composable called useAxios that is a wrapper for axios itself for ease of use.

#### - State persistence

With the help of the useLocalStorage composable, we have reactive and persisted state in pinia.

---

## Reusable components

Most of them are from formkit, but additionaly:

### - Form components

-   Select: based on the headless ui combobox component, still needs some tweaks to include multiple, maybe change for vue multiselect until formkit includes the option.
    -   props:
        -   v-model: the currently selected option.
        -   options: the list of options for the select. (need to type those as generic, but dont know how to do this yet)
        -   label: the label of the select
-   Toggle: based on the headless ui switch component
    -   props:
        -   v-model: whether the toggle is checked or not
        -   labelLeft: the left label for the toggle
        -   labelRight: the right label for the toggle
        -   error: the error label if the toggle is not checked

### - Common components

-   Modal:
    -   props: opened (if the modal should be opened or not)
    -   slots:
        -   title
        -   body
        -   footer
-   Alert:
    -   props:
        -   opened (if the modal should be opened or not)
        -   alertText (the text content of the alert )
        -   alertType (the type of the alert, success or error)

---

### ESlint and Prettier setup

For linting I have used eslint and for formatting I have used prettier. Both have config files for overrides in the root of the folder. In addition to those two files, there is an additional file called .editorconfig that also does some formating for us on save.

---

### Common auth routes already done (login, register, recover and reset password, logout)

I have implemented a minimal setup for all the basic auth flow. The requests have been sent to the [template-backend](https://github.com/genuineq/template-backend) repo made with laravel.

---

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

---

## Folder structure (src)

-   assets
    -   images
    -   styles
    -   fonts
-   components: reusable components throughout the app
    -   common: like modals and alerts
    -   form: synthetic inputs like toggle and select with search
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

---

## How to use the template

I have set the project up in github as a template. Instead of cloning the project, github provides a button where you can start a new repository from this template.

---

## Environment variables

-   VITE_API_URL: env variable for setting up the api url

---

## Things to figure out for the template

-   Issue in github regarding useLocalStorage in pinia store
-   FormKit Pro: they are currently working on further syntetic inputs like the following: "toggle, dropdown, autocomplete, tag list, repeater, multi-step wizard, star rating, button group, date range picker. After that we'll continue to roll out more." We could implement our own stuff until these get out. Unfortunately the pro version is going to be paid, but having every type of input from the same provider would be nice.

---

## How to use the open api generator

Because the npm installation needs java, we have to find other ways to install the open api generator.
For MacOs we can install the openapi-generator through brew. This way the open api is installed globally and
there is no error with java (probabil it comes with java by default?).

With the open api generator installed through brew, we can run the follwing command to generate the client:

```
openapi-generator generate -i jsonplaceholder.yaml -g typescript-axios -o gen/api --config=api.json
```

-   The generate is the command
-   -i is the input yaml configuration (jsonplaceholder.yaml is just an example)
-   -g is the generator, in this case we want to generate a typescript-axios client
-   -o is the output folder
-   --config is the config file we have in the root for the generate command

After we generate the client code in our repo, we have to add a line of configuration in the tsconfig.json file in the client folder:

```
"moduleResolution": "Node"
```

After we add this line we can run:

```
npm install
```

and then

```
npm run build
```

so that the api client is being installed as a dependency.

After being built, we can add the dependency to the root package.json with the name specified inside
[api.json](./api.json), like so:

```
"typescript-axios": "file:gen/api" ("pakage-name from api.json" : "file: the folder where the client is")
```

Then we have to configure the client. It takes 3 parameters: configuration object, baseURL and axios instance.
In the axiosConfig.ts we have to create an axios instance where we set up our intercepters, etc and then pass it to the client togheter with the baseURL and for the client configuration object we pass an undefined object as we might not want to mess with that.

Typescript might throw a type error when supplying the axios instance to the client. This might be because the axios from the client is a different version than the in the root package.json. These versions have to be the same in order for that error to go away.
