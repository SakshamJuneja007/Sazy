import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import './SearchResults.css'; 
import Tittle from '../components/Tittle';
import DecoreSearchResults from './DecoreSearchResults'; 
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const { currency, products } = useContext(ShopContext); 
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const query = searchQuery.toLowerCase();

    const filtered = products?.filter(
      (product) =>
        (product.name?.toLowerCase().includes(query) ||
          product.category?.toLowerCase().includes(query) ||
          product.subCategory?.toLowerCase().includes(query)) &&
        product.category !== 'Furniture' 
    );

    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <div className="search-results-container">
      <div className="text-center text-3xl py-8 search-results-header">
        <Tittle text1={'SEARCH '} text2={' RESULTS'} />
      </div>

      <input
        type="text"
        placeholder="Search for products, categories, or subcategories..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-results-input"
        aria-label="Search Products"
      />

      <div className="search-results-grid">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="search-results-product-card">
              <div className="search-results-product-image-wrapper">
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.image[0]} 
                    alt={product.name}
                    className="search-results-product-image"
                  />
                </Link>
              </div>
              <h3 className="search-results-product-name">{product.name}</h3>
              <p className="search-results-product-price">
                {currency}
                {product.price}
              </p>
            </div>
          ))
        ) : (
          <p>No results found for "{searchQuery}".</p>
        )}
      </div>

      {products && (
        <DecoreSearchResults searchQuery={searchQuery} products={filteredProducts} />
      )}
    </div>
  );
};

export default SearchResults;
