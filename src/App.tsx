import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// import SpaceXLogo from "./Static/spacex_logo.png";
import { BrowserRouter as Router } from "react-router-dom"
import { MyRouter } from "./Components/Routes";
import { SpaceX_Logo } from "./Static/Static";

const client = new ApolloClient({
  uri: 'http://api.spacex.land/graphql/',
  cache: new InMemoryCache()
})

function App() {
  return <div className="container" >
    <div id="logoid" className="text-center" >
      <img alt="logo" src={SpaceX_Logo} width="60%" />
    </div>
    <ApolloProvider client={client} >
      <Router>
        <MyRouter />
      </Router>
    </ApolloProvider>
  </div>;
}

export default App;
