
import remix from "@remix-run/express";
import express  from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//
import * as build from "../build/server/index.js";
import testRouter from './api/test';
/*
API
*/
//test
app.use('/api/test', testRouter);
//
app.all(
  "*",
  remix.createRequestHandler({
    build: build,
  })
);
//
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sever listening on http://localhost:${PORT}`);
});
