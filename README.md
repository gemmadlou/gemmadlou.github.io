# NPM Package Starter

This starter repo is to help build npm packages easily. Features are:

* ES6 (Babel)
* Jest (testing)
* Easily develop with npm script helpers
* Ensure your distribution files compile and tests run with each commit

## Installing

* Simply clone this project.

```shell
git clone git@github.com:gemmadlou/NPM-Package-Starter.git
```

* Remove the .git folder so you can make your own

```shell
cd NPM-Package-Starter
sudo rm -rf .git
```

* Run yarn or npm

```shell
yarn
npm install

yarn run production
npm run production
```

## Name & Customize

* Update the npm package with your information
* Update the webpack config with your information

## Working On Your Package

* Watch and develop your plugin

```shell
yarn run dev
```

* Build a production version of your plugin

```shell
yarn run production
```

## Tests

* Run tests once

```
yarn run test
```

* Watch tests

```shell
yarn run test:watch
```

## Any Issues?

Just submit an issue and I'd be happy to help.

## Want to contribute?

Add an issue, or fork and create a pull request. But it's a simple starter,
so feel free to bend this to your will.