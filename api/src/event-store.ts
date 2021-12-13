import { EventStoreDBClient, FORWARDS, START, END } from "@eventstore/db-client";

const client = EventStoreDBClient.connectionString(
    "esdb://eventstore:2113?tls=false"
);

const connect = async () => {
    await client.readAll({
        direction: FORWARDS,
        fromPosition: START,
        maxCount: 1
    });
}

const subscribe = () => client.subscribeToAll({
    fromPosition: END,
})

export {
    client, connect, subscribe
};