const fs = require('fs');
const path = require('path');
const { ApolloServer, PubSub } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');

const resolvers = require('./resolvers');

const prisma = new PrismaClient();
const pubsub = new PubSub();

const typeDefs = fs.readFileSync(
  path.join(__dirname, 'schema', 'schema.graphql'),
  'utf8'
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
    pubsub,
  },
});

server
  .listen()
  .then((result) => {
    console.log(
      '\x1b[36m%s\x1b[0m',
      `Server is running on ${result.url}`,
      result
    );
  })
  .catch((err) => {
    console.error(err);
  });
