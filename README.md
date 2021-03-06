# ![roe](https://raw.githubusercontent.com/dabapps/roe/master/docs/static/images/roe-logo-small.png)

**DabApps' Project Development Kit**

[![Build Status](https://travis-ci.com/dabapps/roe.svg?token=YbH3f6uroz5f5q8RxDdW&branch=master)](https://travis-ci.com/dabapps/roe)

## About

Roe is a project development kit developed by [DabApps](https://www.dabapps.com).
It is a collection of React components, styles, mixins, and atomic CSS classes to aid with the development of web applications.

## Documentation

Full documentation, examples, and installation / contribution instructions can be found [here](http://dabapps.github.io/roe).

## Contributing

Make sure you are using the correct version of node (12) and npm (7):

```
nvm use
npm i npm -g

# To install a specific version of npm
# npm i npm@7 -g
```

Install dependencies:

```
npm ci
```

Run the docs:

```
npm start
```

Run an examples page (for testing components):

```
npm run examples
```

Run all our tests, linting, etc:

```
npm test
```

Note: the above script will install several different versions of React types, so run `npm ci` once they're done to get back to the correct types.

Format all relevant files using prettier:

```
npm run prettier
```

## Code of conduct

For guidelines regarding the code of conduct when contributing to this repository please review [https://www.dabapps.com/open-source/code-of-conduct/](https://www.dabapps.com/open-source/code-of-conduct/)
