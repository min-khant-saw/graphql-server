import express, { Express } from "express";
import serverStarted from "./src/server";
import "reflect-metadata";

const app: Express = express();

serverStarted(app).then((_) => {
  app.listen(8000, () =>
    console.log("Running On http://localhost:8000/graphql")
  );
});

process.on("uncaughtException", (err) => {
  console.log(err);
});
