# An Electron app with Create React App and Electron Builder for Image upload and Kaleidoscope Effect

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with `--template typescript`option.

Besides that, below features have been added with small changes:

- TypeScript supports for Electron main process source code
- Hot-reload support for Electron app
- Electron Builder support

- Node Version: >18

## Available Scripts in addition to the existing ones

### `yarn install`

To install dependencies.

### `yarn electron:dev`

Runs the Electron app in the development mode.

The Electron app will reload if you make edits in the `electron` directory.<br>
You will also see any lint errors in the console.

### `yarn electron:build`

Builds the Electron app package for production to the `dist` folder.

Your Electron app is ready to be distributed!

## Project directory structure

```bash
my-app/
├── package.json
│
## render process
├── tsconfig.json
├── public/
├── src/
│
## main process
├── electron/
│   ├── main.ts
│   ├── preload.ts
│   └── tsconfig.json
│
## build output
├── build/
│   └── electron/
│      └── main.js
│      └── preload.js
│
## distribution packages
└── dist/
    ├── mac/
    │   └── my-app.app
    └── my-app-0.1.0.dmg
```
