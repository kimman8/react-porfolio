import React from 'react'
import './Testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: "Elon Musk",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda officiis velit fugit, ipsam accusantium!'
  },
  {
    avatar: AVATAR2,
    name: "Steve Jobs",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia et molestias placeat praesentium ea.'
  },
  {
    avatar: AVATAR3,
    name: "Mark Zuckerberg",
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure esse voluptate totam labore commodi odio? Odio consequatur officia alias et nihil nemo voluptatem quas voluptatum sit quia, praesentium natus suscipit?'
  },
  {
    avatar: AVATAR4,
    name: "Jeff Bezos",
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste qui dolores, nobis ut omnis repellat ex sapiente, corrupti eum voluptatum illo iure suscipit quasi blanditiis quam consequatur.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <Swiper
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index)=>(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
            </SwiperSlide>
          ))
        }
        </Swiper>
      
      </div>
    </section>
  )
}

export default Testimonials