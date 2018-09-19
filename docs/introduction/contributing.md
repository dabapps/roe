Fork the repository and run the following to install dependencies:

```shell
npm i
```

To start all the watchers (TypeScript, LESS, markdown files, etc), and serve the documentation with livereloading, run the following:

```shell
npm start
```

Or if you just want play around with some components without updating the documentation, you can run the `examples` directory with livereloading by running the following:

```shell
npm run budo
```

You can run all the type checking, linting and tests with the following:

```shell
npm test
```

To run prettier on all TypeScript files (enforced by the linting stage), run the following:

```shell
npm run prettier
```
