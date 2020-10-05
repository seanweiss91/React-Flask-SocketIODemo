# ChatApp
## Instructions provided by Philana and updated with small adjustments

## Upgrade Node version to v8.17.0 or later

```$ nvm install v8.17.0```

## Install initial `npm` dependencies from `package.json`

This line run  `npm`, which looks inside our `package.json` file, retrieves a list of
packages, and installs them to the `node_modules` folder inside your repository. `node_modules` folder **does not** need to be pushed to Heroku or GitHub.

```$ npm install```

## Install Webpack

This line installs Webpack on your Cloud9 workspace.

```$ npm install --save-dev webpack ```

**Note: This command MUST be ran from the folder that contains package.json! You will get an error if you are in a different folder!**

## Install socketio

This line installs socketio on your Cloud9 workspace.

```$ pip3 install flask-socketio ```

This line installs eventlet on your Cloud9 workspace.

```pip3 install eventlet```

update wepack to recognize socket.io when using "npm run watch" later on

```npm install socket.io-client --save```



## Compile Javascript using Webpack

This line starts up Webpack, which looks inside `webpack.config.js`, loads
configuration options, and starts transpiling your JS code into `static/script.js`. You may be asked to also install webpack-cli. Type **yes**.

```$ npm run watch```

(The program should not stop running. Leave it running.)

## Run the web app

Open a new terminal in your AWS Cloud9 environment (click the little green + button near your current terminal and choose 'New Terminal'). Run `app.py` (from the same folder, but new terminal) and verify that the React renders.

**Do not manually edit `static/script.js`! It will update when you make changes. You DO need to push this file to Heroku and GitHub**
