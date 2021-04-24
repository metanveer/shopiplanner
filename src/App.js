import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { light } from "./configs/colors";
import { ThemeProvider } from "styled-components";
import CartContextProvider from "./contexts/ShoppingListContext";
import Header from "./components/Header";
import { Container } from "./GlobalStyles";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Report from "./pages/Report";

const App = () => {
  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={{ ...theme, setTheme }}>
      <CartContextProvider>
        <GlobalStyle />
        <Router>
          <Container>
            <Header />

            <Switch>
              <Route path="/not-found">
                <NotFound />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/report">
                <Report />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Redirect to="/not-found" />
            </Switch>
          </Container>
        </Router>
      </CartContextProvider>
    </ThemeProvider>
  );
};

export default App;
