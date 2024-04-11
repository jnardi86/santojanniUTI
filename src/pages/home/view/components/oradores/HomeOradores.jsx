import React from 'react'
import OradoresCard from './OradoresCard'
import oradores from './dataOradores.json'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const HomeOradores = () => {

  return (
    <div className="aboutContainer w-full h-auto flex-column justify-center content-center mb-20">
      <div className="aboutContainerHeader w-full h-auto text-center p-2 mb-12">
        <h1 className="font-poppins font-medium text-Blue text-[52px]">Nuestros oradores</h1>
      </div>
      <div className='w-full'>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          loop= {true}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {oradores.map((orador, index) => (
            <SwiperSlide 
              key={index}
              className='flex items-center justify-center'
              >
              <OradoresCard data={orador} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default HomeOradores
