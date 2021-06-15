import React, { Component, Fragment } from "react";
import './App.css';
import RESTAPI from './components/RESTAPI'
import { Container, Header, List } from "semantic-ui-react";
import pkg from 'semantic-ui-react/package.json'
import Example from "./components/example";
import RestAPI from "./components/RESTAPI";
import FormExampleForm from './components/login'
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom"; 

/* const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3">This example is powered by Semantic UI React {pkg.version} </Header>
    
    <FormExampleInverted/>

    {children}
  </Container>
); */


function App() {



  return(
    <div>
       <Fragment>
      <Router>
        
          <Route exact path="/" component={FormExampleForm} />
          <Switch>
              <Route exact path="/RestAPI" component={RestAPI} />
          </Switch>

      </Router>
      </Fragment>
    </div>
  )
}

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);





export default App;

/* 😊 */