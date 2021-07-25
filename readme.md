# Chat Application using SocketIO and NodeJs

## About The Project

In this project, I've created a chat application using SocketIO and Node js.

Node Js is a runtime environment where we run JavaScript. Using Node js we can build stand-alone applications.

Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server.

Combining Node js and HTML we can use JavaScript on server side.


Here I have 4 main files in this project :

- index.html

- index.js

- client.js

- style.css

I've organized these files into separate folders for easy understanding.

In simple words, I've used HTML for designing my application, CSS to make it slightly attractive and JavaScipt to make it interactive.


## Features

My application has the following features :

- multiple users can chat together 

- updates every member of the chat when a new user has joined or left the chat
- produces a _ting_ audio when the user receives a message or when someone enters or leaves the chat


## Prerequisites

Ensure that node js is installed in your PC by running the following command in your terminal :

```

node -v

```

this should print a version number, so you'll see something like this v0xxx.

Next, you need to run the following in the command line :

```

cd .\nodeserver\
npm init
```
npm is Node Package Manager. This installs all your dependencies in node_modules folder which you may require in your application.

Then you need to run :
```
npm i socket.io
npm install -g nodemon
```
this installs **_socket.io_** package which is responsible for making connections between the browser and the server and **_nodemon module_** which automatically restarts the node application when file changes in the directory are detected. 

Finally, run your program by after entering :
```
nodemon .\index.js
```
