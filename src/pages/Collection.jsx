import React, { useContext, useState } from 'react'; // Import useState and useContext
import { Link } from 'react-router-dom'; // Import Link for navigation
import { ShopContext } from '../context/ShopContext'; // Ensure the correct path to ShopContext
import './Collection.css'; // Import the CSS file
import { assets } from '../assets/assets'; // Import assets for icons
import Tittle from '../components/Tittle'; // Import custom Title component

const Collection = () => {
  const { currency, products } = useContext(ShopContext); // Access products from context
  const [showFilter, setShowFilter] = useState(false); // Toggle the filter visibility
  const [selectedCategory, setSelectedCategory] = useState([]); // Track selected categories
  const [selectedSubCategory, setSelectedSubCategory] = useState([]); // Track selected sub-categories
  
  // Toggle the visibility of the filter section
  const toggleFilter = () => setShowFilter(prev => !prev);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
    );
  };

  // Handle sub-category selection
  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory((prev) =>
      prev.includes(subCategory) ? prev.filter(item => item !== subCategory) : [...prev, subCategory]
    );
  };

  // Filter the products based on selected category and sub-category, excluding "Furniture"
  const filteredProducts = products?.filter(product =>
    product.category !== 'Furniture' && // Exclude Furniture category
    (selectedCategory.length === 0 || selectedCategory.includes(product.category)) &&
    (selectedSubCategory.length === 0 || selectedSubCategory.includes(product.subCategory))
  );

  return (
    <div className="collection-container">
      <div className="min-width-60">
        <p
          className="filter-text"
          onClick={toggleFilter} // Add click event to toggle visibility
        >
          FILTER <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : 'rotate-0'}`} src={assets.dropdown_icon} alt="Filter icon" />
        </p>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 font-medium text-sm h1">CATEGORIES</p>
          <div className="filter-section h2 flex flex-col gap-2 text-sm text-gray-700">
            <label>
              <input
                type="checkbox"
                value="Men"
                checked={selectedCategory.includes('Men')}
                onChange={() => handleCategoryChange('Men')}
              />
              Men
            </label>
            <label>
              <input
                type="checkbox"
                value="Women"
                checked={selectedCategory.includes('Women')}
                onChange={() => handleCategoryChange('Women')}
              />
              Women
            </label>
            <label>
              <input
                type="checkbox"
                value="Kids"
                checked={selectedCategory.includes('Kids')}
                onChange={() => handleCategoryChange('Kids')}
              />
              Kids
            </label>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 font-medium text-sm h1">SUB-CATEGORIES</p>
          <div className="filter-section flex flex-col gap-2 text-sm text-gray-700">
            <label>
              <input
                type="checkbox"
                value="Topwear"
                checked={selectedSubCategory.includes('Topwear')}
                onChange={() => handleSubCategoryChange('Topwear')}
              />
              Topwear
            </label>
            <label>
              <input
                type="checkbox"
                value="Bottomwear"
                checked={selectedSubCategory.includes('Bottomwear')}
                onChange={() => handleSubCategoryChange('Bottomwear')}
              />
              Bottomwear
            </label>
            <label>
              <input
                type="checkbox"
                value="Winterwear"
                checked={selectedSubCategory.includes('Winterwear')}
                onChange={() => handleSubCategoryChange('Winterwear')}
              />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="heading1 flex text-5xl justify-between text-base sm:text-2xl mb-4">
          <Tittle text1={'ALL '} text2={' COLLECTION'} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts?.map((product) => (
            <div key={product._id} className=" p-4">
              <div className="overflow-hidden rounded-lg">
                <Link to={`/product/${product._id}`}> {/* Use product.id in the URL */}
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-70 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </Link>
              </div>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-black text-center font-bold">{currency}{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
