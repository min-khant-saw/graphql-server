import jwt from "jsonwebtoken";

const validToken = async (bear_token: string) => {
  try {
    if (bear_token) {
      const user = jwt.verify(bear_token, `${process.env.PRIVATE_KEY}`);
      return user;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export default validToken;
