const { GraphQLServer } = require('graphql-yoga');

const typeDefs='./src/schema.graphql';
const Query = require('./resolvers/query');
const Person = require('./resolvers/person');
const Date = require('./resolvers/date');

const resolvers= {
  Query,
  Person,
  Date
}


const server = new GraphQLServer({
  typeDefs,
  resolvers
})

if (require.main === module) {
  server.start(() => console.log(`Server is running`));
}