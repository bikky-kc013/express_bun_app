import { DataSource } from "typeorm";

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
        entities: [],
        synchronize: true,
      });
    }
    return Database.dataSource;
  }

  public static async initialize(): Promise<void> {
    const dataSource = Database.getDataSource();
    if (!dataSource.isInitialized) {
      await dataSource.initialize();
      console.log("Database connection initialized");
    } else {
      console.log("Database connection is already initialized");
    }
  }
}
