import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { client } from './AppClient.jsx';
import { ApolloProvider } from 'react-apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
