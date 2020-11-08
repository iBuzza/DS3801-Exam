import React, { useState } from 'react';
import {menuItems} from '../../database.js';
import Header from './Header.jsx';
import ProductCard from './ProductCard';

const HotCoffee = (menuItem) => {

  const initialList = menuItems.filter(menuItem => menuItem.category === "hotCoffee");

  const [list, setList] = useState(initialList);

  const filteredList = list.filter(menuItem => menuItem.category === "hotCoffee");

  return(
    <>
    <Header />
      <div>
        <ProductCard
        list={list}
        setList={setList}
        initialList={initialList}
        key={menuItem.productId}
        filteredList={filteredList}
        />
      </div>
      <div id="moveFooter"></div>
      </>
    )
  }

export default HotCoffee;
