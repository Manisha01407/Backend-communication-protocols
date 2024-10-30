### Redis Queue and Pub-Sub System with Express and Worker
This project demonstrates a basic queue and pub-sub system using Redis, where an Express server submits data to a Redis list and a separate worker processes each submission.

### Steps Taken
## Set Up Redis Locally
Start Redis on your local machine to act as the database and message broker.

## Create Project Structure

Initialize a Node.js project with two sub-projects: express-server and worker.
Set up both projects with TypeScript:
npm init -y
npx tsc --init

## Install Dependencies

In express-server, install:
npm i express @types/express redis
In worker, install:
npm i redis

## Express Server Setup

Code Submission Endpoint: Accepts POST requests with problem submission data, then pushes each submission to a Redis list problems.
Redis Client: Connects to Redis, with error handling for connection issues.
Worker Setup

Queue Processing: Connects to Redis, retrieves submissions from the problems list using a blocking pop (brPop), and simulates processing each problem.
Pub-Sub: After processing, publishes a message to the problem_done channel to indicate the result.
Publish and Subscribe

Worker: Subscribes to the problem_done channel and logs the results.
Express Server: Publishes to the problem_done topic upon completion.
