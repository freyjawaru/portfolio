import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import List from "./components/List/List";
import { Route, Switch } from "react-router-dom";
import Cv from "./components/Cv/Cv";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="app">
       <Nav displaytext="NavData" />
    <Header displaytext="HeaderData" /> 
    {/* <Main displaytext="MainData" /> */}
      
    
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/list" component={List} />
        <Route path="/cv" component={Cv} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer displaytext="FooterData"/>
    
   
    </div>

  );
};

export default App;
