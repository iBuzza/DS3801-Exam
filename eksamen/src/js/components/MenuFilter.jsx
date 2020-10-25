import React from 'react';
import {menuItems} from '../database.js';

const MenuFilter = () => {

  const filterHotCoffee = menuItems.filter(menuItem => menuItem.category === "hotCoffee");

  return(
      <div>
        {filterHotCoffee.map(menuItem => {
          return(
            <div className="productCard" key={menuItem.productId}>
              <img src={menuItem.productImage} alt={menuItem.productName} />
              <h1 className="productTitle">{menuItem.productName}</h1>
              <p className="productPrice">From kr. {menuItem.price[0]},-</p>
            </div>
          )
        })} 
      </div>
  )
}

export default MenuFilter;