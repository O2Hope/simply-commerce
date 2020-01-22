import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import SignIn from "./pages/sign-in/sign-in.component"
import { Switch, Route } from "react-router-dom";
import SignInPage from "./pages/sign-in/sign-in.component";

function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component = { ShopPage}/>
        <Route exact path="/signin" component={SignInPage}/>
      </Switch>
    </div>
  );
}

export default App;
