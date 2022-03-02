import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import './App.css';
import {Route, Link} from 'react-router-dom';

const Hats = () => {
    return (
        <div>
            <h1>Hats Page</h1>
            <p>This is the hats page</p>
        </div>
    )
}

function App() {
  return (
      <div>
        <Route exact path='/' component={HomePage} />
         <Route exact path='/hats' component={Hats} />
      </div>
  );
}

export default App;
