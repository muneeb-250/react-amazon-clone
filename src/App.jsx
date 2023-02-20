import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
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
        <Header />
        <Checkout />
      </Route>
    </BrowserRouter>
  )
}

export default App;