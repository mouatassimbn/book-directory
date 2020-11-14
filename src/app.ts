import express, { Express } from "express";
import bodyParser from "body-parser";
import { PORT } from "./utils/config";
import { routes } from "./routes/routes";

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
routes(app);

app.listen(PORT, () => console.log(`Application starting on port ${PORT}...`));
