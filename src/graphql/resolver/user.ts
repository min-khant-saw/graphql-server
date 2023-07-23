import UserModel from "../../app/model/userModel";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";

type UserInput = {
  name: string;
  email: string;
};

const userResolvers = {
  Mutation: {
    createUser: async (_: unknown, { input }: { input: UserInput }) => {
      try {
        const payload = { email: input.email };

        const token = jwt.sign(payload, `${process.env.PRIVATE_KEY}`, {
          expiresIn: "1d",
        });

        const userModel = new UserModel(input.name, input.email, token);
        await userModel.Create();
        return userModel;
      } catch (error) {
        throw new GraphQLError("This Email Already Used", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
          },
        });
      }
    },
  },
};

export default userResolvers;
