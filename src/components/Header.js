import React, { Component } from 'react';

export class Header extends Component{
  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <div className="nav navbar-nav">
              <a href="#">Home</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}