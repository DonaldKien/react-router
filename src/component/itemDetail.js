import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ItemDetail() {

  let params = useParams();

  useEffect(() => {
    fetchItem()
  },[])

  const [ item, setItem ] = useState([])

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const item = await fetchItem.json();
    setItem(item);
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <h1>{item.description}</h1>
    </div>
  );
}

export default ItemDetail;
