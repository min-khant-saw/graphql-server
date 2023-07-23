type Book = {
  title: string;
  author: string;
};

const books: Book[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const book = `#graphql
  type Book {
    title: String
    author: String
  }
  
  type Query {
    books: [Book]
  }
`;

export { book, books };
