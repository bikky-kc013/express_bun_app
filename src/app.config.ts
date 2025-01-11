import express from "express";

export class ExpressConfig {
  private app: express.Application;
  private port = Number(Bun.env.APP_PORT) || 3000;
  constructor(express: express.Application) {
    this.app = express;
  }

  public async init(): Promise<void> {
    try {
      this.app.listen(this.port, () => {
        console.info(`Express Server is listening to port ${this.port}`);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
