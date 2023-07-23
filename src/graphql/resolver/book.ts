import { books } from "../schema/book";

const resolvers = {
  Query: {
    books: () => books,
  },
};
export default resolvers;
