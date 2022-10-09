
# Toolbox code chanllenge

This repository contain two main folders:

-  **./api** Server side aplicattion (back-end).

-  **./web** Client side aplicattion (front-end).

  

## Api

 Before you run any of these commands you have to install the project's dependencies, to do it run this command: **npm install**

The server run on port **3001**, if you want to change the port you have to change it in the file **"./api/src/env.js"**

**Note:** if you change the api port you have to change the **axios's baseURL** in the front-end application to match with your new port.

- To start the server you have to execute this command: **npm start**
- To start the server on development mode execute this command: **npm run dev**

- To run test execute this command: **npm run test**

## Web

Before you run any of these commands you have to install the project's dependencies, to do it run this command: **npm install**

The aplicattion run on port **3000**.

if you want to run the application on another port you have to change it in the **./package.json** file.

The **axios's baseURL** is setted in **./src/main.jsx** file.

- To start the server you have to execute this command: **npm start**
- to start the server on development mode execute this command: **npm run dev**
- To run test execute this command: **npm run test**
- To run test coverage execute this command: **npm run coverage**
- To build the application execute this command: **npm run build**