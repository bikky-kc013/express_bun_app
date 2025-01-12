import "reflect-metadata";
import express from "express";
import { Database } from "./infrastructure/datasource/postgres/postgres-dataSource";
import { Config } from "./app.config";

(async () => {
  const app = express();
  const expressServer = new Config();
  try {
    const port = Bun.env.APP_PORT ? Number(Bun.env.APP_PORT) : 4000;
    await Database.initialize();
    expressServer.initializeExpress(app, port);
  } catch (error) {
    console.error("Error during initialization", { error });
  }
})();
