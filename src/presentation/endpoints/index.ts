import restify, { createServer } from "restify";
import { GetCompanyByIdEndpoint } from "./company/getCompanyById";
import { GetCompanyByNameEndpoint } from "./company/getCompanyByName";

const app = createServer();
app.use(restify.plugins.queryParser());

app.get("/companies/:id", GetCompanyByIdEndpoint)
app.get("/companies-by-name", GetCompanyByNameEndpoint)

export default app;