import React from "react";

const Product_Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-11/12 md:w-2/3 lg:w-1/2 relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
        <img
          className="w-full h-64 object-contain"
          src={product.image}
          alt={product.title}
        />
        <h2 className="text-2xl font-bold text-center my-4">{product.title}</h2>
        <p className="text-lg text-gray-700 text-center">
          {product.description}
        </p>
        <div className="text-xl text-yellow-500 font-bold py-2 text-center">
          Rating: {product.rating.rate} / 5
        </div>
        <div className="text-xl font-bold text-center">
          Price: ${product.price}
        </div>
      </div>
    </div>
  );
};

export default Product_Modal;
