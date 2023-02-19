import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Route exact path='/'>
        <Header />
        <Home />
      </Route>
      <Route path='/login'>
        <h1>Login</h1>
      </Route>
      <Route path='/checkout'>
        <h1>Checkout</h1>
      </Route>
    </BrowserRouter>
  )
}

export default App;