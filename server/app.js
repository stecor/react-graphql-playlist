const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema")

const app = express();

//middleware
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true

  //schema:schema
}));

app.listen(4000,()=>{
  console.log("now listening for requests on port 4000")
});
