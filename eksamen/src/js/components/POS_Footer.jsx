import React from 'react';
import {posFooterIcons} from '../database.js';
import {footerIcons} from '../database.js';
import '../../css/POS_Footer.css';


const POS_Footer = (props) =>{
    //console.log(icons);


    return(
        <nav>
            <div className="POS_Footer" id="home" onClick={props.onClick}>
            <img className="POS_Button" src={footerIcons[4].image} alt={footerIcons[4].alt}></img>
            </div>
            <div className="POS_Footer" id="coffee">
               <img src={posFooterIcons[0].image} alt={posFooterIcons[0].alt}></img>
               <p>Coffee</p>
            </div>
            <div className="POS_Footer" id="favorites"><img src={posFooterIcons[1].image} alt={posFooterIcons[1].alt}></img>
            <p>Drinks</p>
            </div>
            <div className="POS_Footer" id="food"><img src={posFooterIcons[3].image} alt={posFooterIcons[3].alt}></img>
            <p>Food</p>
            </div>
            <div className="POS_Footer" id="options"><img className="POS_Button" src={posFooterIcons[2].image} alt={posFooterIcons[2].alt}></img></div>
            <div className="POS_Footer" id="calculator"><img className="POS_Button" src={posFooterIcons[5].image} alt={posFooterIcons[5].alt}></img></div>
            <div className="POS_Footer" id="calculator"><img className="POS_Button" src={posFooterIcons[4].image} alt={posFooterIcons[4].alt}></img></div>
        </nav>
    );
}


export default POS_Footer;