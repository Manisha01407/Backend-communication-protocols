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

## 3.Kafka with Node.js: Producer, Consumer, Consumer Groups, and Partitions
This guide provides a step-by-step approach to setting up Apache Kafka using Docker, creating topics, and working with Kafka concepts like producer, consumer, consumer groups, and partitions.

## Prerequisites
Docker: Ensure Docker is installed and running on your system.
Node.js: Install Node.js if you plan to use Kafka clients in Node.js for producing or consuming messages.

### Step 1: Set Up Kafka Using Docker
Run a Kafka Container: Start an Apache Kafka container using Docker:
docker run -p 9092:9092 apache/kafka:3.7.1

### Access the Kafka Container: To access the Kafka container’s shell, list the running containers and then use docker exec:
docker ps  # Find your Kafka container ID
docker exec -it <container_id> /bin/bash
cd /opt/kafka/bin

## Step 2: Kafka Basics
Concepts Overview
Producer: A client that publishes messages to Kafka topics.
Consumer: A client that reads messages from Kafka topics.
Consumer Group: A group of consumers that work together to read from a set of topic partitions. Kafka distributes messages across the consumers in a group.
Partition: Topics are divided into partitions to allow parallel processing and scalability.

### Step 3: Working with Kafka Topics
Create a Topic: Create a Kafka topic named quickstart-events:
./kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092

### Produce Messages to the Topic: Open a producer to send messages to the quickstart-events topic:
./kafka-console-producer.sh --topic quickstart-events --bootstrap-server localhost:9092

### Type messages into the terminal. Each line is a new message sent to the topic.
Consume Messages from the Topic: Open a consumer to read messages from the quickstart-events topic:
./kafka-console-consumer.sh --topic quickstart-events --from-beginning --bootstrap-server localhost:9092

### Step 4: Using Partitions in Kafka
Partitions allow you to split data across multiple nodes for parallel processing.
Create a New Topic with Multiple Partitions: Create a topic named payment-done with 3 partitions:
./kafka-topics.sh --create --topic payment-done --partitions 3 --bootstrap-server localhost:9092

### Verify Partitions: Check the configuration of the payment-done topic to confirm it has 3 partitions:
./kafka-topics.sh --describe --topic payment-done --bootstrap-server localhost:9092
