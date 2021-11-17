import React, { Component } from 'react';
import logo from '../../assests/icon.jpg';
import './_header.scss';
import { Link} from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <header className="header">      
        <div className="header__container">
        <img className="header__logo" src={logo} alt='' />
         <h1 className="header__heading">RENT A BIN</h1>
       </div>
       <div className="header__btn-container">
         <Link to='/'><button className='header__btn'>Home</button></Link>
       <Link to='/signup'> <button className="header__btn ">New Booking</button></Link>
        <Link to= '/login'><button className="header__btn">My Booking</button></Link>
         </div>
         <div></div>
      </header>

    )
  }
}

export default Header; 



