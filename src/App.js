import React, { Component } from 'react';
import User from './components/User';
import Navbar from './components/Navbar';

import './App.css';

class App extends Component {

  render() {

    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <User
          name="Hilal BAYRAK"
          department="Yazılım Geliştirme"
          salary="10000"
        />

<User
          name="Muhammed BAYRAM"
          department="Yazılım Geliştirme"
          salary="20000"
        />
        {/*<h4>App Component</h4>*/}
        {/*<h4 style={{color:"blue", fontSize:"30px"}}>App Component</h4>*/}
        {/*<h4 className="header">App Component</h4> css kullanıldığında */}
      </div>
    );
  }
}

export default App;
