export default `#graphql
type User {
    name: String
    email: String
}

input InputUser {
    name: String
    email: String
}

type Mutation {
    createUser(input: InputUser!) : User!
}

`;
