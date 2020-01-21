import { Server, Request } from "@hapi/hapi";

export default {
  name: "echo",
  version: "1.0.0",
  async register(server: Server): Promise<void> {
    server.route({
      method: "POST",
      path: "/echo",
      handler(request: Request) {
        return request.payload;
      }
    });
  }
};
