import React from "react";
import { render } from "react-dom";

import AppRouter from "./router";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloProvider from "react-apollo/ApolloProvider";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:8081/graphql" }),
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <AppRouter />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
