import React, { useState, useEffect } from 'react';
import Image from 'next/image';
 
import Link from 'next/link';

 
import { getSimilarProducts } from '../services';

const ProductWidget = ({ category, slug }) => {
  
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getSimilarProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  console.log(products)

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
 
    </div>
  );
};

export default ProductWidget;