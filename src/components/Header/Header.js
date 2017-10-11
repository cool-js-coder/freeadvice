import React from 'react'
import './Header.css'
class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div>
        <div className="header-container">
          <ul>
            <li><a href="about">About us</a></li>
            <li><a href="problems">Problems</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header
