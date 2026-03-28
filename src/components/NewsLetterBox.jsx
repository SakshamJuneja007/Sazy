import React from 'react';

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // Add subscription logic here
    };

    return (
        <div className='py-8 bg-gray-100 flex justify-center items-center'>
            <div className='text-center w-full sm:w-2/3 lg:w-1/2 px-4'>
                <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
                <p className='text-gray-400 mt-3'>
                    Stay updated with our latest offers, news, and trends. Join our mailing list!
                </p>
                <form
                    onSubmit={onSubmitHandler}
                    className='flex flex-col sm:flex-row items-center gap-3 mt-5 border rounded-md px-4 py-2'
                >
                    <input
                        className='flex-grow outline-none text-sm py-2 w-full sm:w-auto'
                        type='email'
                        placeholder='Enter your email address'
                        required
                    />
                    <button
                        type='submit'
                        className='bg-black text-white text-xs px-6 py-3 rounded-md hover:bg-gray-800 transition-colors'
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetterBox;
