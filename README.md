# allinfra-challenge
Coding challenge for Allinfra.

## Getting Started
To get started, ensure you have a LTS version of Node (>12).

The following examples will be using the package manager `yarn` but `npm` or `pnpm` will also work.

Install all the necessary dependencies:
```
    yarn
```

The entrypoint to the CLI is `src/index.js`. You can either call it directly via node `node src/index.js` or use the
provided script - `yarn start`.

The CLI expects 3 parameters to be used:

```
    yarn start <user x coordinate> <user y coordinate> <shop data url>
```

An example of how to use the CLI:

```
    yarn start 47.6 -122.4 https://raw.githubusercontent.com/allinfra-ltd/test_oop/master/coffee_shops.csv?token=AA5HVELWEJRKDGHELZ6232DAOHE54
```
