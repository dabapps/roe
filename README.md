# ![roe](docs/images/roe-logo-small.png) [![Build Status](https://travis-ci.com/dabapps/roe.svg?token=YbH3f6uroz5f5q8RxDdW&branch=master)](https://travis-ci.com/dabapps/roe)

**DabApps' Project Development Kit**

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
npm i dabapps/roe#vX.X.X
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

### Code Higlighting

If you want to use the `CodeBlock` component with code highlighting you will need to include `highlight.js` in your index.html (or bundle the styles if you prefer, the javascript must be globally available).

Highlight.js recommends this CDN.

```html
<!-- Include this in your head tag -->
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github-gist.min.css">

<!-- Include this anywhere before your main javascript file -->
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
```
