import React from 'react';
import { Launches } from './Components/Launches';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://api.spacex.land/graphql/',
  cache : new InMemoryCache()
})

function App() {
  return <div className="container" >
    <ApolloProvider client={client} >
      <Launches />
    </ApolloProvider>
  </div>;
}

export default App;
