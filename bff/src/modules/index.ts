import { createApplication } from "graphql-modules";
import root from './root'

const application = createApplication({
    modules: [root]
});

export default application.createSchemaForApollo();