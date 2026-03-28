import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTab, setSelectedTab] = useState(0); // Tab selection state
  const [selectedSize, setSelectedSize] = useState(''); // Size selection state
  const { products, currency, addToCart } = useContext(ShopContext);

  // Fetch product data based on the current product ID
  const fetchProductData = useCallback(() => {
    if (!products || products.length === 0) {
      console.error('Products data is empty or not available.');
      return;
    }

    const item = products.find((product) => product._id === productId);

    if (item) {
      setProductData(item);
      setSelectedImage(item.image[0] || ''); // Default to the first image
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  }, [productId, products]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  if (!productData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">Loading product details...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (productData.category === 'Furniture') {
      addToCart(productData._id); // Add furniture directly without a size
      toast.success('Added to Cart!', { position: 'top-right', autoClose: 2000 });
    } else if (selectedSize) {
      addToCart(productData._id, selectedSize); // Add other items with size
      toast.success('Added to Cart!', { position: 'top-right', autoClose: 2000 });
    } else {
      toast.error('Please select a size before adding to the cart!', {
        position: 'bottom-right',
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="pt-40 pl-5 transition-opacity ease-in duration-500 opacity-100 ml-30 overflow-hidden">
      <ToastContainer /> {/* For toast notifications */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-6">
        {/* Image Section */}
        <div className="flex-1 flex flex-col sm:flex-row gap-5">
          <div className="flex sm:flex-col gap-3 sm:gap-5">
            {productData.image?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`w-20 object-cover rounded-lg cursor-pointer border-2 ${
                  selectedImage === img ? 'border-blue-500' : 'border-gray-300'
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="flex-grow sm:w-3/5">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={productData.name}
                className="w-90% sm:w-90% lg:w-full h-auto rounded-lg shadow-lg"
              />
            ) : (
              <p className="text-gray-500 text-center">No image available</p>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 mt-6 sm:mt-0">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className="w-3.5" />
            ))}
            <img src={assets.star_dull_icon} alt="star" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-600 mb-6">{productData.description}</p>

          {/* Size Selector */}
          {['Kids', 'Men', 'Women'].includes(productData.category) && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Select Size</h2>
              <div className="flex space-x-1 w-80">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedSize === size ? 'bg-black text-white' : 'hover:bg-black hover:text-white transition'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected size: <span className="font-bold">{selectedSize}</span>
                </p>
              )}
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-3 rounded-lg text-lg hover:bg-gray-800 transition duration-300"
            disabled={productData.category !== 'Furniture' && !selectedSize} // Disable button if no size is selected for non-furniture items
          >
            {selectedSize || productData.category === 'Furniture' ? 'Add to Cart' : 'Select a Size to Add'}
          </button>

          {/* Product Information */}
          <div className="mt-8">
            <p className="text-gray-500">100% Original product.</p>
            <p className="text-gray-500">Cash on delivery available.</p>
            <p className="text-gray-500">Easy returns within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <div className="border-b flex space-x-4">
          {['Description', `Reviews (${productData.reviews?.length || 0})`].map((tab, idx) => (
            <button
              key={idx}
              className={`pb-2 text-lg font-semibold ${
                selectedTab === idx ? 'border-b-2 border-black' : 'text-gray-500'
              }`}
              onClick={() => setSelectedTab(idx)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {selectedTab === 0 ? (
            <p className="text-gray-600 mb-20 border p-4 font-semibold">
              {productData.description ||
                'An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet.'}
            </p>
          ) : (
            <div className="text-gray-600 mb-20">
              {productData.reviews?.length > 0 ? (
                productData.reviews.map((review, idx) => <p key={idx}>{review}</p>)
              ) : (
                <p>Please Wait Loading.....</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <RelatedProduct />
    </div>
  );
};

export default Product;
