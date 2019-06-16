import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { client } from "./AppClient.jsx";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
