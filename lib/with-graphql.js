import fetch from "isomorphic-unfetch";
import {Client, defaultExchanges, subscriptionExchange, Provider} from "urql";
import {SubscriptionClient} from "subscriptions-transport-ws";
import ws from "isomorphic-ws";

const WithGraphQL = ({children, token}) => {
    const subscriptionClient = new SubscriptionClient(
        process.env.NEXT_PUBLIC_WS_URL,
        {
            reconnect: true,
            connectionParams: {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            },
        },
        ws
    );

    const client = new Client({
        url: process.env.NEXT_PUBLIC_API_URL,
        fetch,
        fetchOptions: {
            headers: {
                Authorization: `Bearer ${token}`
            }

        },
        requestPolicy: "cache-and-network",
        exchanges: [
            ...defaultExchanges,
            subscriptionExchange({
                forwardSubscription(operation) {
                    return subscriptionClient.request(operation);
                },
            }),
        ],
    });

    return <Provider value={client}>{children}</Provider>;
};

export default WithGraphQL;