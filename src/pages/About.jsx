import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Tittle from '../components/Tittle';
import { Link } from 'react-router-dom';
import './about.css';

const Item = () => {
  const { currency, products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null); // State for active product on hover

  const toggleFilter = () => setShowFilter((prev) => !prev);

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory((prev) =>
      prev.includes(subCategory)
        ? prev.filter((item) => item !== subCategory)
        : [...prev, subCategory]
    );
  };

  const filteredProducts = products?.filter(
    (product) =>
      product.category === 'Furniture' &&
      (selectedSubCategory.length === 0 ||
        selectedSubCategory.includes(product.subCategory))
  );

  // Handle hover/touch event for mobile devices
  const handleTouchStart = (index) => {
    setActiveProduct(index);
  };

  const handleTouchEnd = () => {
    setActiveProduct(null);
  };

  return (
    <div style={{ paddingTop: '70px', marginBottom: '30px', margin: '0', padding: '0', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="item-container">
          <div className="min-width-60">
            <p className="filter-text" onClick={toggleFilter}>
              FILTER{' '}
              <img
                className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : 'rotate-0'}`}
                src={assets.dropdown_icon}
                alt="Filter icon"
              />
            </p>

            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
              <p className="mb-3 font-medium text-sm h1">CATEGORIES</p>
              <div className="flex flex-col gap-2 text-sm text-gray-700">
                <label>
                  <input
                    type="checkbox"
                    value="Chairs"
                    checked={selectedSubCategory.includes('Chairs')}
                    onChange={() => handleSubCategoryChange('Chairs')}
                  />
                  Chairs
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Tables"
                    checked={selectedSubCategory.includes('Tables')}
                    onChange={() => handleSubCategoryChange('Tables')}
                  />
                  Tables
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Sofas"
                    checked={selectedSubCategory.includes('Sofas')}
                    onChange={() => handleSubCategoryChange('Sofas')}
                  />
                  Sofas
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Mugs"
                    checked={selectedSubCategory.includes('Mugs')}
                    onChange={() => handleSubCategoryChange('Mugs')}
                  />
                  Mugs
                </label>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="heading2 flex justify-between text-base sm:text-2xl mb-4 pr-4">
              <Tittle text1={'FURNITURE '} text2={' COLLECTION'} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts?.map((product, index) => (
                <Link key={product._id} to={`/product/${product._id}`}>
                  <div
                    className="border " // Added padding for space around each item
                    onMouseEnter={() => setActiveProduct(index)} // Set active product on hover (desktop)
                    onMouseLeave={() => setActiveProduct(null)} // Reset active product on mouse leave (desktop)
                    onTouchStart={() => handleTouchStart(index)} // Set active product on touch (mobile)
                    onTouchEnd={handleTouchEnd} // Reset active product on touch end (mobile)
                  >
                    <div className="overflow-visible rounded-lg relative p-0"> {/* Removed padding from container */}
                      <img
                        src={product.image[0]} // Primary image
                        alt={product.name}
                        className={`w-full h-40 sm:h-72 md:h-96 object-cover rounded transition-opacity duration-300 ${activeProduct === index ? 'opacity-0' : 'opacity-100'}`}
                      />

                      <img
                        src={product.hoverImage}
                        alt={`${product.name} hover`}
                        className={`absolute top-0 left-0 w-full h-40 sm:h-72 md:h-96 object-cover rounded transition-opacity duration-300 ${activeProduct === index ? 'opacity-100' : 'opacity-0'}`}
                      />
                    </div>
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <p className="text-black text-center font-bold">
                      {currency}
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
