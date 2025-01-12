import { DataSource } from "typeorm";
import { UserEntity } from "./entities";
import logger from "@/infrastructure/logging/logger";

export class Database {
  private static dataSource: DataSource;
  private constructor() {}
  public static getDataSource(): DataSource {
    if (!Database.dataSource) {
      Database.dataSource = new DataSource({
        type: "postgres",
        host: Bun.env.DB_HOST,
        port: Number(Bun.env.DB_PORT),
        username: Bun.env.DB_USER,
        password: Bun.env.DB_PASSWORD,
        database: Bun.env.DB_NAME,
        entities: [UserEntity],
        synchronize: true,
        logging: false,
      });
    }
    return Database.dataSource;
  }

  public static async initialize(): Promise<void> {
    const dataSource = Database.getDataSource();
    if (!dataSource.isInitialized) {
      await dataSource.initialize();
      logger.info("Database connection initialized");
    }
  }
}
