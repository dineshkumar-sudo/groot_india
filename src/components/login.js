import React from 'react';
import fire from './fire';
import './login.css';
import RestAPI from './RESTAPI';
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom"; 

class Login extends React.Component {

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

   /* ------ */
  
  
   constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() 
  {
      if(this.state.user)
      {
        return  <Redirect to="/RestAPI"></Redirect> 
      }
      
    return (
      <div>
        
        <div class="container">
          <div class="forms-container">

            <div class="signin-signup">
             <form action="#" class="sign-in-form">
               <h1>GROOTAN</h1>
                 <h2 class="title">Sign in to become GROOTAN</h2>
                  <div class="input-field">
                     <i class="fa fa-user"></i>
                     <input type="text" placeholder="Username" name="username" id="email"/>
                  </div>
                  <div class="input-field">
                     <i class="fa fa-lock"></i>
                     <input type="password" placeholder="Password" name="password" id="password"/>
                  </div>
                  <div className="losp">
                        <input type="submit" class="btn solid" onClick={this.login} value="I AM GROOT"/>
                        <input type="submit" class="btn solid" onClick={this.signUp} value="SignUp"/>
                        
                  </div>
                 
                  <div>If you already have an Account,you can just login using your creditionals</div>
             </form>
            </div>
          </div>


        
        </div>
        
         </div>
      

    );

      }
}

export default Login;