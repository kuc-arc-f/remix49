
import remix from "@remix-run/express";
import express  from "express";
import 'dotenv/config'

//
import * as build from "../build/server/index.js";
import testRouter from './api/test';
import commonRouter from './api/commonRouter';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
console.log("EXTERNAL_API_URL=", process.env.VITE_EXTERNAL_API_URL)

/*
API
*/
app.use('/api/test', testRouter);
app.use('/api/common', commonRouter);
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
