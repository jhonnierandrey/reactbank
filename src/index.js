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

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

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
        localStorage.clear();
        window.location.href = '/'
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
      <Route component={ () => {window.location.href = '/'}} />
    </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
