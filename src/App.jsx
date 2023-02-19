import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Components/Header/Header';

function App() {

  return (
    <BrowserRouter>
      <Route exact path='/'>
        <h1>Welcome</h1>
      </Route>
      <Route path='/login'>
        <Header />
      </Route>
      <Route path='/checkout'>
        <h1>Checkout</h1>
      </Route>
    </BrowserRouter>
  )
}

export default App;