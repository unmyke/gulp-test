# Gulp boilerplate tasks

Provide project tasks to simplify fullstack development process. Your source directory must contain `client`, `server` and `common` directories. Boilerplate use webpack to create client and server builds.

## Installation

Clone this repository and copy `gulpfile.js` and `config` directories into your project.

List of directories:
`src` - example of source files;
`gulpfile.js` - Gulp tasks, contains `constants` directory to setup tasks;
`config` - JSON-config files for application.

## Available Gulp tasks:

### Run application

- ```shell
    yarn run start
  ```

  Create client bundle and start server in production mode.

* ```shell
  yarn run devServer
  ```

  Start server in dev mode via [Nodemon](https://nodemon.io/).

- ```shell
  yarn run devClient
  ```

  Start [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/) and [React Hot Loader](http://gaearon.github.io/react-hot-loader/).

- ```shell
  yarn run dev
  ```

  Run `devServer` and `devClient` in parallel mode.

- ```shell
  yarn run devTest
  ```

  Run tests.

- ```shell
  yarn run devConsole
  ```

  Run REPL on server.

#### Clean build directories

- ```shell
  yarn run clean
  ```

  Clean all build directories

- ```shell
  yarn run cleanServer
  yarn run cleanCommon
  yarn run cleanClient
  ```

  Clean specific build directories

#### Transpile

Transpile server, common or both using [Babel](https://babeljs.io/).

```shell
# production mode
yarn run transpileServer
yarn run transpileCommon
yarn run transpile

# development mode
yarn run transpileDevServer
yarn run transpileDevCommon
yarn run transpileDev
```

#### Bundle

Bundle server, client or both using [Webpack](https://webpack.js.org).

```shell
# production mode.
yarn run bundleDevServer
yarn run bundleClient
yarn run bundle

# development mode.
yarn run bundleServer
yarn run bundleDevClient
yarn run bundleDev
```
