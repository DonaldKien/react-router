import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function Shop() {
  let match = useRouteMatch();
  console.log('match => ', match);
  useEffect(() => {
    fetchItems();
  }, [])

  const [ items, setItems ] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const items = await data.json();
    setItems(items);
  }

  return (
    <div>
      <h1>SHOP</h1>
      <div>
        {items.map(ele => (
          <h1 key={ele.id}>
            <Link to={`/shop/${ele.id}`}>{ele.title}</Link>
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Shop;
