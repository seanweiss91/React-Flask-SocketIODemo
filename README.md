# React/Flask/Socket io demo
This is a quick demo for the above mentioned technologies. The main page shows an input element with an associated button. A new socket is opened with Socket IO on the pyhon server side when a new client connects (accesses the webpage). Typing something into the input field and clicking the button sends the data to the backend and inserts it into a python list (a temp DB until we start working with SQL). The server then sends a response message verifying it got the message and includes the updated list, which then gets displayed on the front end. If the item is already in the python list then the server sends a different message acknowledging the duplicate.

## Install flask

```$ pip install flask```

## Upgrade Node version to v8.17.0 or later

```$ nvm install v8.17.0```

## If you're using a virtual env install npm with:

```$ source ./bin/activate```
```pip install nodeenv```
```nodeenv -p ```

And test with:
```npm install -g npm```
```npm -v```

## Install initial `npm` dependencies from `package.json`

This line run  `npm`, which looks inside our `package.json` file, retrieves a list of
packages, and installs them to the `node_modules` folder inside your repository. `node_modules` folder **does not** need to be pushed to GitHub.

```$ npm install```

## Install Webpack

```$ npm install --save-dev webpack ```

**Note: This command MUST be ran from the folder that contains package.json! You will get an error if you are in a different folder!**

## Install socketio

```$ pip3 install flask-socketio ```

update wepack to recognize socket.io when using "npm run watch" later on

```npm install socket.io-client --save```

## Compile Javascript using Webpack

This line starts up Webpack, which looks inside `webpack.config.js`, loads
configuration options, and starts transpiling your JS code into `static/script.js`. You may be asked to also install webpack-cli. Type **yes**.

```$ npm run watch```

(The program should not stop running. Leave it running.)

If this fails with "sh: webpack: command not found" you my need to run:

```$ npm install -g webpack```

If you see "Error: Can't resolve 'babel-loader'" you may need to run:

```$ npm install babel-loader --save```

## Run the web app

Open a new terminal in your environment. Run `app.py` (from the same folder, but new terminal) and verify that the React renders.

**Do not manually edit `static/script.js`! It will update when you make changes. You DO need to push this file to GitHub**
