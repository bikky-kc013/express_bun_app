import express from "express";
import { Database } from "./infrastructure/datasource/mysql/mysql-dataSource";
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
