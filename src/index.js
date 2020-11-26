import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'react-redux'
import store from '@/redux/store.js'
import { HashRouter, Route, Redirect } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter >
      <Route
        path='/'
        render={(route) => {
          if (route.location.pathname === '/') {
            return <Redirect to='/app/dashboard/index' />
          } else {
            return <App />
          }
        }}
      />
    </HashRouter>
  </Provider>, document.getElementById('root'))
