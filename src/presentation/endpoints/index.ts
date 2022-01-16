import { createServer } from "restify";
import { GetCompanyByIdEndpoint } from "./company/getCompanyById";

const app = createServer();

app.get("/companies/:id", GetCompanyByIdEndpoint)

export default app;