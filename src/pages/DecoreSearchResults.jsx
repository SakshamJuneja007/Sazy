import React, { useState, useEffect, useContext } from 'react';
import './DecoreSearchResults.css'; // Ensure you're using the correct CSS
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const DecoreSearchResults = ({ searchQuery }) => {
  const { currency, products } = useContext(ShopContext); // Access products and currency from context
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Update filtered products based on search query for 'Furniture' category
  useEffect(() => {
    if (products) { // Ensure products are available
      const query = searchQuery.toLowerCase();

      // Filter products based on search query and category 'Furniture'
      const filtered = products.filter(
        (product) =>
          product.category === 'Furniture' && // Filter by furniture category
          (product.name?.toLowerCase().includes(query) ||
            product.category?.toLowerCase().includes(query) ||
            product.subCategory?.toLowerCase().includes(query))
      );

      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  return (
    <div className="decore-results-container">
      <div className="decore-results-grid">
        {filteredProducts?.map((product) => (
          <div key={product._id} className="decore-product-card">
            <div className="decore-product-image-wrapper">
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image ? product.image[0] : ''} // Ensure image exists
                  alt={product.name || 'Product image'} // Provide alt text
                  className="decore-product-image"
                />
              </Link>
              {product.hoverImage && product.hoverImage[0] && ( // Ensure hoverImage exists
                            <Link to={`/product/${product._id}`}>

                <img
                  src={product.hoverImage[0]}
                  alt={`${product.name || 'Product'} hover`}
                  className="decore-product-hover-image"
                />
                              </Link>

              )}
            </div>
            <h3 className="decore-product-name">{product.name}</h3>
            <p className="decore-product-price">
              {product.currency || currency} {/* Use product's currency or the default one from context */}
              {product.price}
            </p>
          </div>
        ))}
        {filteredProducts?.length === 0 && (
          <p className="decore-no-results">
            No items available for "{searchQuery}".
          </p>
        )}
      </div>
    </div>
  );
};

export default DecoreSearchResults;
