import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import SpaceXLogo from "./Static/spacex_logo.png";
import { BrowserRouter as Router } from "react-router-dom"
import { MyRouter } from "./Components/Routes";

const client = new ApolloClient({
  uri: 'http://api.spacex.land/graphql/',
  cache: new InMemoryCache()
})

function App() {
  return <div className="container" >
    <div className="text-center" >
      <img alt="logo" src={SpaceXLogo} width="60%" />
    </div>
    <ApolloProvider client={client} >
      <Router>
        <MyRouter />
      </Router>
    </ApolloProvider>
  </div>;
}

export default App;
