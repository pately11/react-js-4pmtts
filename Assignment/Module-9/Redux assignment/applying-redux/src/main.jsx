import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import App from './App.jsx'
import Reducer from './reducer/Index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
const store = createStore(
  Reducer, /* preloadedState, */)
render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));