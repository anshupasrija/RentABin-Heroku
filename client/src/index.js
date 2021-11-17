import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import App from'./App';
import EditDetail from './components/EditDetails/EditDetail';
// import About from './components/About/About';
import Login from './components/login/Login';
import Header from './components/Header/Header';
import Signup from './components/signup/Signup';
import Products from './components/products/Products';
import Owner from './components/Owner/Owner';



ReactDOM.render(
  <React.StrictMode>
    <Router>  
      <Header/>   
     
      <Switch>
         <Route path="/" component={Products} exact />
        <Route path="/login" component={Login} exact /> 
        <Route path="/signup" component={ Signup} exact /> 
        <Route path="/edit/:id" component={EditDetail} />
        <Route path="/user/:id" component={Owner}/>
        
       
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    
    </Router>    
  </React.StrictMode>,
  document.getElementById('root')
);

