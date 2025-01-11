import express from "express";
import { Database } from "./infrastructure/datasource/postgres/postgres-dataSource";
import { ExpressConfig } from "./app.config";

(async () => {
  const app = express();
  const Express = new ExpressConfig(app);
  try {
    await Database.initialize();
    await Express.init();
  } catch (error) {
    console.log(error);
  }
})();
