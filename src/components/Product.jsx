import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "./Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const API_URL = "https://fakestoreapi.com";

const Product = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="mx-auto py-5 lg:py-10">
      {loading && <Skeleton count={1} />}
      <div className="container">
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data?.map((pro) => (
            <SwiperSlide key={pro.id}>
              <div className="p-3 shadow-lg">
                <img
                  className="w-full h-96 lg:h-60 md:h-40 sm:h-32 object-contain"
                  src={pro.image}
                  alt=""
                />
                <h3 className="text-xl lg:text-2xl font-bold text-center mt-2">{pro.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
