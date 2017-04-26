### BASIC EXPRESS/WEBPACK DEV SERVER
A simple set up for a react app running on an express server utilizing webpack for bundling and hot reloading for development.

This is intended to be an example of an npm package that will be included into a parent application running express. The example shows how to create a standalone dev server with routing for testing server side and client side code while closely mimicking the parent application.

#### node modules
All modules are already installed when npm installing from the root of this repo. For clarity the node modules used in the example are listed below.
- express
- webpack
- webpack-dev-middleware, webpack-hot-middleware
- babel-loader, style-reloader, css-reloader, less-loader
- all requirements are already installed

#### Starting Server
```
$ node server.js
```
The server will start on port 3000 and start listening for changes in the js and less files inside the /app directory.


/app directory contains all app files.
/public is the output for express server and contains the html template.
