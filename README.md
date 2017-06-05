# ![roe](docs/images/roe-logo-small.png) - DabApps' Project Development Kit [![Build Status](https://travis-ci.com/dabapps/roe.svg?token=YbH3f6uroz5f5q8RxDdW&branch=master)](https://travis-ci.com/dabapps/roe)

**A Collection of React Components for Project Development**

## Development

Clone the repo and run the following to start all the watchers, and serve `docs/` with livereloading CSS.

```shell
npm install
npm start
```

## Usage

### Install

You need to install Roe and its peer dependencies with npm. Npm should warn you if you haven't installed any peer dependencies.

```shell
npm i dabapps/roe#v0.0.0
```

See [releases](https://github.com/dabapps/roe/releases) for a full list of versions.

### Less

Include Roe in your main `index.less` file. Do not use `../` in the path.

```less
@import 'node_modules/roe/src/less/index.less';
```

### Components

All components are exported, named, at the root level.

```javascript
import {
  Column,
  Container,
  Row
} from 'roe';
```
