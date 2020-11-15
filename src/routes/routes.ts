import { Express } from "express";
import * as books from "./books";

export function routes(app: Express) {
  //TODO: Register routes
  app.use("/api", books.router);
  
}
