import React , { Fragment } from "react";
import ReactDOM from "react-dom";
import { Card, Container, Header, List } from "semantic-ui-react";
import pkg from 'semantic-ui-react/package.json'
import RestAPI from "./components/RESTAPI";
import FormExampleForm from './components/login'
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";



const App = ({ children }) => (
  <>
  <Header as="h1" style={{ margin: 20 ,alignItems: "center" , justifyContent: "center" , display: "flex" , color : "green" }} > <strong>GROOTANS</strong></Header>
  <Container style={{ margin: 20 , alignItems: "center" , justifyContent: "center" , display: "flex" }}>
  
    {children}
  </Container>
  </>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App className="App"  style={{backgroundColor: "black"}}>
    <Card.Group>
    <Fragment>
      <Router>
        
          <Route exact path="/" component={FormExampleForm} />

          <Switch>
              <Route exact path="/RestAPI" component={RestAPI} />
          </Switch>

      </Router>
      </Fragment>
      
    </Card.Group>
    
  </App>,
  document.getElementById("root")
);
