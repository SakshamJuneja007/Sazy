import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Tittle from './Tittle';
import { Link } from 'react-router-dom';

const BestSeller = () => {
  const { currency, products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    if (products?.length > 0) {
      const bestProducts = products.filter((item) => item.bestseller1);
      setBestSeller(bestProducts.slice(0, 6));
    }
  }, [products]);

  const handleTouch = (id) => {
    setActiveProduct((prev) => (prev === id ? null : id));
  };

  return (
    <div className="my-10">
      {/* Section Title */}
      <div className="text-center text-3xl py-8">
        <Tittle text1={'LATEST '} text2={'COLLECTION '} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our Latest Collection of elegantly crafted furniture pieces, designed to blend style and functionality for every home.
        </p>
      </div>

      {/* Product Grid */}
      {bestSeller.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6">
          {bestSeller.map((product) => (
            <div
              key={product._id}
              className="p-4 shadow-sm group"
              onTouchStart={() => handleTouch(product._id)}
              onMouseEnter={() => setActiveProduct(product._id)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div className="relative">
                {/* Default Image */}
                <img
                  src={product.image[0]} // Use the first image if `image` is an array
                  alt={product.name}
                  className={`w-full h-40 sm:h-60 md:h-80 object-cover rounded transition-opacity duration-300 ${
                    activeProduct === product._id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <Link to={`/product/${product._id}`}>
                  {/* Hover Image */}
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} hover`}
                    className={`absolute top-0 left-0 w-full h-40 sm:h-60 md:h-80 object-cover rounded transition-opacity duration-300 ${
                      activeProduct === product._id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </Link>
              </div>
              <h3 className="text-lg mt-2 text-center sm:text-md">{product.name}</h3>
              <p className="text-center font-bold">
                {currency}
                {product.price}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No bestseller products found.</p>
      )}
    </div>
  );
};

export default BestSeller;
