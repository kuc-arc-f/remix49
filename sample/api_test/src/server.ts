
import { createRequestHandler } from "@remix-run/express";
import express  from "express";

console.log(".NODE_ENV =", process.env.NODE_ENV);
//
const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );
//
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static("public"));
//
import * as build from "../build/server/index.js";
import testRouter from './api/test';
import commonRouter from './api/commonRouter';
/*
API
*/
app.use('/api/test', testRouter);
app.use('/api/common', commonRouter);
//
app.use(
  viteDevServer
    ? viteDevServer.middlewares
    : express.static("build/client")
);

const build = viteDevServer
  ? () =>
      viteDevServer.ssrLoadModule(
        "virtual:remix/server-build"
      )
  : await import("../build/server/index.js");

app.all("*", createRequestHandler({ build }));
//
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sever listening on http://localhost:${PORT}`);
});
