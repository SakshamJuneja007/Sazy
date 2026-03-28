import React, { useContext, useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {
  const { currency, products } = useContext(ShopContext);
  const [orders, setOrders] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = () => {
      const db = getDatabase();
      const ordersRef = ref(db, "orders");

      onValue(
        ordersRef,
        (snapshot) => {
          const data = snapshot.val();
          if (data && typeof data === "object") {
            const formattedOrders = Object.keys(data).map((key) => ({
              ...data[key],
            }));
            setOrders(formattedOrders);
          } else {
            console.error("Invalid data format:", data);
            setOrders([]); // Set to an empty array if no data is present or if data format is incorrect
          }
          setIsLoading(false);
        },
        (error) => {
          console.error("Error fetching orders:", error);
          setIsLoading(false); // Handle errors gracefully
        }
      );
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6">Your Orders</h1>

      {isLoading ? (
        <div>Loading orders...</div>
      ) : orders.length === 0 ? (
        <div>No orders found.</div>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-lg flex flex-col gap-4">
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">Order Placed</span>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300"
                  onClick={() => alert(`Tracking order`)}
                >
                  Track Order
                </button>
              </div>

              <div className="space-y-2">
                {order.cartItems && order.cartItems.length > 0 ? (
                  order.cartItems.map((item, itemIndex) => {
                    const product = products.find(p => p._id === item.productId);
                    if (!product) return null; // Skip if product is not found
                    return (
                      <div key={itemIndex} className="flex items-center gap-4">
                        <div className="w-16 h-16 mr-4">
                          <img
                            src={product.image || "/placeholder-image.jpg"} // Fallback if no image is provided
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold">{product.name || "Unknown Product"}</span>
                          <span>{item.quantity} x</span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div>No items found.</div>
                )}
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Total: {order.total ? order.total.toFixed(2) : "0.00"}</span>
                <span className="text-sm text-gray-500">
                  {order.timestamp
                    ? new Date(order.timestamp).toLocaleString()
                    : "N/A"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
