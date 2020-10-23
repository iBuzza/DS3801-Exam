import React from 'react';
import icons from "../../img/footer-icons/footer-icons";


/* function Footer(){
    return(
        <footer>
//             <div className="home"><img src={icons[0].image}></img></div>
//             <div className="profile">🙍‍♂️</div>
//             <div className="favorites">🧡</div>
//             <div className="shopping-cart">🛒</div>
//             <div className="options">•••</div>
//         </footer>
//     );
// } */

const Footer = () =>{
    console.log(icons);
    return(
        <footer>
            <div className="home"><img src={icons[0].image}></img></div>
            <div className="user"><img src={icons[1].image}></img></div>
            <div className="favorites"><img src={icons[2].image}></img></div>
            <div className="shopping-cart"><img src={icons[3].image}></img></div>
            <div className="options"><img src={icons[4].image}></img></div>
        </footer>
    );
}


export default Footer;