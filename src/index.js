import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Dashboard } from "./components/index";

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

let routes = [];

if (window.localStorage.getItem('userData')) {
  routes = [
    {
      path: "/",
      exact: true,
      component: Dashboard
    },{
      path: "/dashboard",
      exact: true,
      component: Dashboard
    },{
      path: "/logout",
      exact: true,
      component: () => {
        // logout api/forget user from api
        const url = `${process.env.REACT_APP_API_URL}/api/logout`;
        fetch(url, {
          method: 'POST',
          credentials: 'include',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Cache': 'no-cache'
          }
        })
        .then(response => response.json())
        .then(result => {
            if(result.msg === 'User is now Logged Out'){
              localStorage.clear();
              window.location.href = '/'
            }else{
              localStorage.clear();
              window.location.href = '/'
            }
        })
      }
    },
  ]
}else{
  routes = [
    {
      path: "/",
      exact: true,
      component: App
    }
  ]
}

const routing = (
  <Router>
    <Switch>
      { routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Route component={ () => {
          localStorage.clear();
          window.location.href = '/';
        }}
      />
    </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
