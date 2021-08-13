const resolvers = {
    Query: {
        node: () => null,
    },
    Mutation: {
        ping: () => true,
    }
}

export default resolvers;