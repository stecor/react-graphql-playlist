import React, { Component } from 'react';
import './App.css';
import Booklist from './components/BookList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql';
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Ninja Reading</h1>
          <Booklist />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
