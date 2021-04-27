import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import List from "./components/List/List";
import { Route, Switch } from "react-router-dom";
import cv from "./KC.Chandler.resume.pdf";
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
       <a href={cv} target="_blank" rel="noopener noreferrer">CV</a>
        <Route path="/Contact_me" component={Contact} />
      </Switch>
      <Footer displaytext="FooterData"/>
    
   
    </div>

  );
};

export default App;
