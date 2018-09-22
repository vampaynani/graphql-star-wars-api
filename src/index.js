const mongoose = require('mongoose');
const { DATABASE_URL } = require('./config');
const { GraphQLServer } = require('graphql-yoga');

const typeDefs='./src/schema.graphql';
const Query = require('./resolvers/query');

// let links = [{
//   id: 'link-0',
//   url: 'www.howtographql.com',
//   description: 'Fullstack tutorial for GraphQL'
// }];
// let idCount = links.length;

const resolvers= {
  Query,
  Mutation: {
    post: async (root, args) => {
      // const link = {
      //   id: `link-${idCount}`,
      //   description: args.description,
      //   url: args.url
      // }
      // links.push(link);
      // idCount++;
      // return link;
      let link = await Link.create({
        description: args.description,
        url: args.url
      });
      return link;
    }
  }
}


const server = new GraphQLServer({
  typeDefs,
  resolvers
})

if (require.main === module) {
  mongoose.connect(DATABASE_URL);
  server.start(() => console.log(`Server is running`));
}