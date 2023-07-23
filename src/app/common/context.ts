import { GraphQLError } from "graphql";
import validToken from "./validToken";

const context = async ({ req, res }: { req: any; res: any }) => {
  if (req.body.operationName === "createUser") {
    return {};
  }
  const token = req.headers.authorization || "";

  const user = await validToken(token);

  if (!user) {
    throw new GraphQLError("User UNAUTHENTICATED", {
      extensions: {
        code: "UNAUTHENTICATED",
      },
    });
  }
  return { user };
};

export default context;
