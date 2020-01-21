import { Server } from "@hapi/hapi";
import echo from "./api/echo";

const init = async (): Promise<void> => {
  const server = new Server({
    port: process.env.PORT || 8080,
    host: process.env.HOST || "localhost"
  });

  await server.register(echo, { routes: { prefix: "/api" } });

  await server.start();
  console.log(`Server is running on ${server.info.uri} `);
};

init();
