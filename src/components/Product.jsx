import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "./Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Stars from "./Stars";
import Product_Modal from "./Product_Modal"; // MODAL KOMPONENTASINI IMPORT QILISH

const API_URL = "https://fakestoreapi.com";

const Product = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`${API_URL}/products`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product); // TANLANGAN MAHSULOTNI O'RNATISH
    setOpenProductModal(true); // MODALNI OCHISH
  };

  return (
    <div className="mx-auto py-5 lg:py-10">
      {loading && <Skeleton count={12} />}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((pro) => (
          <div className="p-3 shadow-lg" key={pro.id}>
            <button
              className="w-full h-96 lg:h-60 md:h-40 sm:h-32"
              onClick={() => handleProductClick(pro)}
            >
              <img
                className="w-full h-full object-contain"
                src={pro.image}
                alt=""
              />
            </button>
            <h3 className="text-xl lg:text-2xl font-bold text-center mt-2">
              {pro.title}
            </h3>
            <div className="text-xl lg:text-2xl text-yellow-500 font-bold py-2 flex justify-center items-center">
              <Stars rating={pro.rating.rate} />
            </div>
          </div>
        ))}
      </div>

      {/* MODALNI CHAQIRISH */}
      <Product_Modal
        isOpen={openProductModal}
        onClose={() => setOpenProductModal(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default Product;
