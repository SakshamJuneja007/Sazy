import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Tittle from './Tittle';
import Zara from './zara.png';
import Louis from './louis.png';
import Puma from './puma.png';
import { Link } from 'react-router-dom';

import './latestcollection.css';

const LatestCollection = () => {
    const { products, currency } = useContext(ShopContext);

    // Select only the first 12 products
    const latestProducts = products.slice(0, 12);

    return (
        <div className="my-10 px-1 py-1 mx-1 item-center">
            {/* Section Title */}
            <div className="text-3xl text-center py-8">
                <Tittle text1={'BEST '} text2={'SELLER '} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Discover our Best Sellers in clothing, featuring trendy and timeless designs perfect for every occasion.
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6">
                {latestProducts && latestProducts.length > 0 ? (
                    latestProducts.map((product) => (
                        <div
                            key={product._id}
                            className="p-4 transition-transform hover:shadow-lg"
                        >
                            <div className="overflow-hidden rounded-lg">
                                <Link to={`/product/${product._id}`}>
                                    <img
                                        src={Array.isArray(product.image) ? product.image[0] : product.image}
                                        alt={product.name}
                                        className="w-full h-70 object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                </Link>
                            </div>
                            <h3 className="text-md mt-2 text-center">{product.name}</h3>
                            <p className="text-center font-bold">
                                {currency}{product.price}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-lg my-8">
                        Currently, no products are available. Please check back later!
                    </p>
                )}
            </div>

            {/* Trending Brands */}
            <div className="heading mt-12 text-center">
                <h1>Trending <span>Brands</span></h1>
            </div>
            <div className="brand">
                <img src={Louis} alt="Louis Vuitton logo" />
                <img src={Puma} alt="Puma logo" />
                <img src={Zara} alt="Zara logo" />
            </div>
        </div>
    );
};

export default LatestCollection;
