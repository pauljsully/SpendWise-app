const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    transactions: [Transaction]
  }
  type Transaction {
    tranID: ID
    title: String
    amount: Float
    date: String
    category: String
    description: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user: [User]
    transactions: [Transaction]
  }

  input tranInput {
    tranID: String!
    title: String!
    amount: Float!
    date: String!
    category: String!
    description: String!
  }

  type Mutation {
    addUser(username: String, email: String, password: String): Auth
    login(email: String, password: String): Auth
    addTransaction(transactionData: tranInput!) : Transaction
    deleteTransaction(transactionId: ID!): Transaction
  }
`;

module.exports = typeDefs;
