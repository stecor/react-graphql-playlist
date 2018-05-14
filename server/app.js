const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require('mongoose');
const config = require('../config');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect(config.MONGODB_CONNECTION);

mongoose.connection.once('open',() =>{
  console.log('connected to database');
});

//middleware
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true

  //schema:schema
}));

app.listen(4000,()=>{
  console.log("now listening for requests on port 4000")
});
