import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Home/Navbar/Navbar";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar></Navbar>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/aboutMe">
          <AboutMe></AboutMe>
        </Route>
        <Route path="/resume">
          <Resume></Resume>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
