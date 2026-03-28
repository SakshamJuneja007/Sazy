import React, { useContext, useState } from 'react';
import { useCart } from "../context/CartContext";
import { ShopContext } from '../context/ShopContext';
import { getDatabase, ref, set, push, serverTimestamp } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

const Pay = () => {
  const { currency, products } = useContext(ShopContext);
  const { cartItems } = useCart();

  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const subtotal = cartItems.reduce((total, item) => {
    const product = products.find(p => p._id === item.productId);
    return total + (product?.price * item.quantity || 0);
  }, 0);

  const shippingFee = 5;
  const total = subtotal + shippingFee;

  const saveOrderToFirebase = () => {
    setIsProcessing(true);
    const db = getDatabase();
    const ordersRef = ref(db, 'orders');
    const newOrderRef = push(ordersRef);

    set(newOrderRef, {
      shippingInfo,
      cartItems,
      paymentMethod,
      subtotal,
      shippingFee,
      total,
      timestamp: serverTimestamp()
    })
      .then(() => {
        toast.success('Order placed successfully!');
        setIsProcessing(false);
      })
      .catch((error) => {
        toast.error('Error placing order: ' + error.message);
        setIsProcessing(false);
      });
  };

  const handlePayment = () => {
    if (paymentMethod === 'Razorpay') {
      toast.info('Currently, Razorpay is unavailable. Please select another payment method.');
    } else if (paymentMethod === '') {
      toast.error('Please select a payment method first.');
    } else {
      saveOrderToFirebase();
    }
  };

  return (
    <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-8 mb-4">
      <div className="w-full h-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg mt-14 mb-5">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Information</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={shippingInfo.fullName}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your address"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="number"
              name="phone"
              value={shippingInfo.phone}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={shippingInfo.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Payment Method</label>
            <select
              className="w-full p-3 border rounded-lg"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="COD">Cash on Delivery (COD)</option>
              <option value="Razorpay">Razorpay</option>
            </select>
          </div>
        </form>
      </div>

      <div className="w-full h-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-24 bottom-8 right-8">
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

          <button
            className={`w-full text-white py-3 mt-6 rounded-lg ${isProcessing ? 'bg-gray-500' : 'bg-black hover:bg-gray-800'} transition-all duration-300`}
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Place Order'}
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Pay;
