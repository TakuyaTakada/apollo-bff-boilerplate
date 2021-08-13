import "graphql-import-node";
import { createModule } from "graphql-modules";
import * as typeDefs from "./root.graphql";
import resolvers from "./resolvers";

const module = createModule({
    id: "root",
    dirname: __dirname,
    typeDefs,
    resolvers,
})

export default module;