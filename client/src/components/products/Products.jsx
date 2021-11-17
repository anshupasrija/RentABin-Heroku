

import React, { Component } from 'react';
import box1 from "../../assests/plastic_bins1.png"
import boxes25 from"../../assests/25boxes.jpg";
import boxes3 from "../../assests/3boxes.png";
import './_products.scss';

class Products extends Component { 
    render(){
    return (
            <div className="card">
            <h1 className="card__heading">Rent A Bin</h1>
            <div className="card__container">
                <div className="card__subcontainer"><img src={box1} alt="bannerimage" className="card__image" /> 
            </div>
                <div className="card__subcontainer"><img src={boxes3} alt="bannerimage" className="card__image" /> </div>
                <div className="card__subcontainer"><img src={boxes25} alt="bannerimage" className="card__image" /> </div>                     
             </div>  
             <div className="description__container">
             <div className="description__subcontainer">
                 <h1 className="description__heading">One Bedroom</h1>
                 <p className="description__subheading"> Boxes:10</p>
                 <p className="description__subheading">Price:10$ per day</p>
             </div>
             <div className="description__subcontainer">
                <h1 className="description__heading">Two Bedroom</h1> 
                <p className="description__subheading">Boxes:20</p>
                <p className="description__subheading">Price:20$ per day</p>
             </div>
             <div className="description__subcontainer">
                 <h1 className="description__heading">Three Bedroom</h1>
                 <p className="description__subheading">Boxes:40</p>
                 <p className="description__subheading">Price:30$ per day</p>
             </div>
             </div>
             <div className="footer__container">
              <span className="footer__contact">Contact Us:</span><span className="footer__number">778-555-BINS(2345)</span>
             
                         
          </div>  
             </div>   
             
        
    )}
}

export default Products


