import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom'; 
import { useCart } from "../context/CartContext"; 
import { ShopContext } from '../context/ShopContext'; 
import './cartPage.css';

const Cart = () => {
  const { currency, products } = useContext(ShopContext); 
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart(); 

  const subtotal = cartItems.reduce((acc, item) => {
    const product = products.find(p => p._id === item.productId);
    if (!product) return acc;
    return acc + (product.price * item.quantity);
  }, 0);
  
  const shippingFee = 5.00;
  const total = subtotal + shippingFee;

  return (
    <div className="container  p-4 flex flex-col mb-16">
      <div className="flex-1 mr-6 mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mt-20 mb-4">Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-6">
            {cartItems.map((item) => {
              const product = products.find(p => p._id === item.productId);
              if (!product) return null; 

              const totalPrice = (product.price * item.quantity).toFixed(2);

              return (
                <li
                  key={item.productId + item.size}
                  className="border rounded flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  {/* Product Image */}
                  <div className="w-90% h-32 md:h-40 mr-6 border-2 border-gray-300 rounded-lg overflow-hidden">
                    <img
                      src={Array.isArray(product.image) ? product.image[0] : product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 mt-2">Size: {item.size}</p>
                    <p className="text-gray-600 mt-1">Quantity: {item.quantity}</p>
                    <p className="text-gray-800 font-semibold mt-2">
                      {currency}{totalPrice}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <div className="flex items-center justify-end space-x-4">
                    <button
                      onClick={() => removeFromCart(item.productId, item.size)}
                      className="bg-black text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-all duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Cart Summary Section */}
      <div className="w-full md:w-1/3 p-6 border-2 border-gray-300 rounded-lg shadow-lg mt-8 mb-4 ml-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-800 font-medium">Subtotal</span>
            <span className="text-gray-800">{currency}{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-800 font-medium">Shipping Fee</span>
            <span className="text-gray-800">{currency}{shippingFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-semibold text-xl">
            <span className="text-gray-800">Total</span>
            <span className="text-gray-800">{currency}{total.toFixed(2)}</span>
          </div>
          <Link to='/pay'>
            <button 
              className="w-full bg-black text-white py-3 mt-6 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Proceed to Pay
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Cart;
