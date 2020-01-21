import { Server } from "@hapi/hapi";
import fs from "fs";

export default {
  name: "serve-foo",
  version: "1.0.0",
  async register(server: Server): Promise<void> {
    server.route({
      method: "GET",
      path: "/foo.txt",
      handler() {
        return fs.readFileSync("/foo/foo.txt").toString();
      }
    });
  }
};
