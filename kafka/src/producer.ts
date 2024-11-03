import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"]
})

const producer = kafka.producer();

async function main() {
    await producer.connect();
    await producer.send({
        topic: "quickstart-events",
        messages: [{
            value: "hi there from nodejs server "
        }]
    })
}

main()