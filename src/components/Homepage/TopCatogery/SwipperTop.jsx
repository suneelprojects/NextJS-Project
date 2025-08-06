"use client"; 

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import  './swipperTop.module.css'

import topCatogeryStyle from '@/components/Homepage/TopCatogery/topCatogery.module.css'


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation  } from 'swiper/modules';

import sliderImg_1 from '@/assets/homepage/TopCatogery/course_icon_1.svg';
import sliderImg_2 from '@/assets/homepage/TopCatogery/course_icon_2.svg';
import sliderImg_3 from '@/assets/homepage/TopCatogery/course_icon_3.jpg';
import sliderImg_4 from '@/assets/homepage/TopCatogery/course_icon_4.jpg';
import sliderImg_5 from '@/assets/homepage/TopCatogery/course_icon_5.svg';
import sliderImg_6 from '@/assets/homepage/TopCatogery/course_icon_6.png';
import Image from 'next/image';

const repeatedImages = [
  { img: sliderImg_1, category: 'Full Stack', courses: '03 Courses' },
  { img: sliderImg_2, category: 'Data Science', courses: '01 Courses' },
  { img: sliderImg_3, category: 'Generative AI', courses: '02 Courses' },
  { img: sliderImg_4, category: 'AWS DevOps', courses: '02 Courses' },
  { img: sliderImg_5, category: 'Digital Marketing', courses: '02 Courses' },
  { img: sliderImg_6, category: 'HR Specialisation', courses: '02 Courses' }
];


const SwipperTop = () => {

  return (
    <div className='swipperContainer'>
      <Swiper
        effect={'slide'}
        grabCursor={true}
        loop={false} 
        slidesPerView={6} 
        spaceBetween={60}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 30,
          }
        }}
        
        pagination={{
            
          clickable: true,

          renderBullet: (index, className) => {
            if (index<6) {
              return `<span className="${className}"></span>`;
            }
            return '';
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className='swiper_container'
      >
        {repeatedImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`${topCatogeryStyle.topCategoryBox}`}  >
              <div>

                <div className='d-flex justify-content-center'>
                <Image src={item.img} alt={`Slide ${index + 1}`} />

                </div>

              <div className={`${topCatogeryStyle.topCategoryBoxText}`} >
                <span className={`${topCatogeryStyle.FirstText}`} >{item.category}</span>
                <span className={`${topCatogeryStyle.SecondText}`} >{item.courses}</span>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
            <i className="bi bi-chevron-left"></i>
          </div>
          <div className='swiper-button-next slider-arrow'>
            <i className="bi bi-chevron-right"></i>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwipperTop;
