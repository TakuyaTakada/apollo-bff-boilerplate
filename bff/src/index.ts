import { ApolloServer } from "apollo-server-fastify";
import fastify from "fastify";
import schema from "./modules";
import { server as config } from "./config/server"

async function startApolloServer(schema) {
    const server = new ApolloServer({ schema });
    await server.start();
    const app = fastify();
    app.register(server.createHandler())
    await app.listen(config.port);
    console.log(`🚀 Server ready at http://${config.publicHostname}:${config.port}${server.graphqlPath}`);
}

startApolloServer(schema)