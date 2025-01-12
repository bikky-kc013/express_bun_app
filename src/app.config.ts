import type { Express } from "express";
import routes from "./presentation/routes";
import logger from "./infrastructure/logging/logger";

export class Config {
  initializeExpress(app: Express, port?: number) {
    const PORT = port || 4000;
    routes(app);
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  }
}
