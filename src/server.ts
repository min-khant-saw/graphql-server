import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { json, Express } from "express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import cors from "cors";
import { book } from "./graphql/schema/book";
import resolvers from "./graphql/resolver/book";
import user from "./graphql/schema/user";
import userResolvers from "./graphql/resolver/user";
import { mongoose } from "@typegoose/typegoose";
import context from "./app/common/context";

require("dotenv").config();

mongoose.connect(`${process.env.MONGODB_URL}`);

const schema = makeExecutableSchema({
  typeDefs: [book, user],
  resolvers: [resolvers, userResolvers],
});

const serverStarted = async (app: Express) => {
  const server = new ApolloServer({
    schema: schema,
  });
  await server.start();

  app.use(
    "/graphql",
    cors({ credentials: true }),
    json(),
    expressMiddleware(server, {
      context: context,
    })
  );
};

export default serverStarted;
