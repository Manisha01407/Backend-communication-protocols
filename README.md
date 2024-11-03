## 1.Redis Queue and Pub-Sub System with Express and Worker
This project demonstrates a basic queue and pub-sub system using Redis, where an Express server submits data to a Redis list and a separate worker processes each submission.

### Steps Taken
## Set Up Redis Locally
Start Redis on your local machine using Docker.

### Create Project Structure

Initialize a Node.js project with two sub-projects: express-server and worker.
Set up both projects with TypeScript:
npm init -y
npx tsc --init

### Install Dependencies

In express-server, install:
npm i express @types/express redis
In worker, install:
npm i redis

### Express Server Setup

Code Submission Endpoint: Accepts POST requests with problem submission data, then pushes each submission to a Redis list problems.
Redis Client: Connects to Redis, with error handling for connection issues.
Worker Setup

Queue Processing: Connects to Redis, retrieves submissions from the problems list using a blocking pop (brPop), and simulates processing each problem.
Pub-Sub: After processing, publishes a message to the problem_done channel to indicate the result.
Publish and Subscribe



Worker: Subscribes to the problem_done channel and logs the results.
Express Server: Publishes to the problem_done topic upon completion.


## 2.WebSocket Project with Node.js and React
This project demonstrates a basic WebSocket setup for real-time communication between a Node.js server and a React client.

### Steps to Set Up the Project
Initialize a Node.js Project

### Create a new directory for your project.
Navigate to the project directory and run the following command:
npm init -y

### Add TypeScript Configuration

Initialize TypeScript configuration:
npx tsc --init
Modify tsconfig.json to specify input and output directories:
Set "rootDir": "./src"
Set "outDir": "./dist"

### Install Dependencies

Install the WebSocket library:
npm install ws @types/ws

Using Express, install it as well:
npm install express @types/express

### Set Up the WebSocket Server
Create an HTTP server to handle incoming requests and WebSocket connections.
Initialize a WebSocket server using the HTTP server.
Handle WebSocket Events

Implement event listeners for connection and message to manage client connections and incoming messages.
Create a React Project

### Use Vite to set up a new React project:
npm create vite@latest
Establish WebSocket Connection in React

In your React application, create a WebSocket connection to the server.
Set up event handlers to manage connection status and incoming messages.
Run the Project

### Start the Node.js server:
node dist/index.js

### Start the React application:
npm run dev

### How WebSocket Works
WebSocket provides full-duplex communication channels over a single TCP connection.
It enables real-time messaging between clients and servers without the need for repeated HTTP requests.
With this setup, you can achieve real-time communication between the Node.js server and the React client using WebSocket.
