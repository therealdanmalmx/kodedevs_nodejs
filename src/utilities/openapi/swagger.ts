import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import YAML from "yamljs";

const externalDocs = YAML.load(
  path.resolve(__dirname, "../openapi/endpoints.yaml")
);

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "KodeDevs API",
      version: "1.0.0",
      description: "Endpoints for the KodeDevs app",
    },
    paths: externalDocs.paths,
    components: externalDocs.components,
  },
  apis: ["@/routes/*.ts", "@/models/*.ts", "/@controllers/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
