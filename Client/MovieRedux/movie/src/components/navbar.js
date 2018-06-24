import React, { Component } from 'react';
import logo from '../images/logo.png';


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span> 
                </button>
                <img src={logo} className="App-logo" alt="logo" />
                
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">

                <ul className="nav navbar-nav navbar-right">
                 
              <form className="navbar-form navbar-left" action="/">
                <div className="input-group search_nav">
                  <input type="text" className="form-control" placeholder="Search" name="search"/>
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="glyphicon glyphicon-search"></i>
                    </button>
                  </div>
                </div>
              </form>



                </ul>
              </div>
            </div>
          </nav>
      </div>
    );
  }
}

export default Navbar;