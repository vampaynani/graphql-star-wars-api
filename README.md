# Star Wars GraphQL API

An example of how to implement graphql consuming a RESTful API(https://swapi.co/).

## Getting started
### Setting up a project

- Clone this repository: `git clone https://github.com/vampaynani/graphql-star-wars-api`
* Move into the project directory: `cd graphql-star-wars-api`
* Install the dependencies: `yarn install`
* Run the development task: `yarn start`
* Go to `http://localhost:4000` and start to do queries

### How to do a query
```graphql
query{
  people(id:1){
    name
    height
    mass
    homeworld{
      name
      climate
      population
    }
    films{
      title
      episode
      opening
      release
    }
  }
}
```
## Requirements
- NodeJS
- Yarn (global)
- Nodemon (global)

## Dependencies
- [graphql-yoga](https://www.npmjs.com/package/graphql-yoga)
- [axios](https://www.npmjs.com/package/axios)
