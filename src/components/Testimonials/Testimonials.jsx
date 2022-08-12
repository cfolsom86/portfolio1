import React, { useRef, useState } from 'react'
import './Testimonials.css'
import Ava1 from '../../assets/fitz-avatar.jpg'
import Ava2 from '../../assets/derp.jpeg'
import Ava3 from '../../assets/spoopy.jpg'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"

const data = [
{
  avatar: Ava1,
  name: 'CaptainPopCulture',
  review: "Best website anyone has ever made for me. And it was free, to boot! Man! I really owe Cliff one (even tho his wife and I got him a bass amp for his birthday...)"
},
{
  avatar: Ava2,
  name: "Someone Else",
  review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet consectetur, aut inventore debitis a sunt minus quos animi eligendi deserunt aliquam assumenda, corporis impedit reprehenderit molestias doloribus culpa. Odit tenetur et quidem velit, iste doloremque ut! Laboriosam totam assumenda delectus eum dolor tenetur voluptatibus temporibus eius, placeat iure, neque asperiores!"
},
{
  avatar: Ava3,
  name: "My Mom",
  review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam fugit unde culpa cumque maxime qui in provident ut expedita, earum ipsum consequuntur, voluptates, dolore reprehenderit. Amet ipsa, modi ea deserunt expedita quis architecto assumenda perspiciatis? Molestiae adipisci quibusdam ea vel nulla odio tenetur deleniti. Quo deserunt cumque laudantium eaque incidunt culpa, ex expedita, sequi laborum dignissimos vel unde, officia iure obcaecati illum odit atque eveniet error? Architecto libero ea aut quisquam perspiciatis quam voluptatem, expedita enim recusandae similique saepe!"
}
]

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className='client__avatar'>
                  <img src={avatar} alt="Avatar 1" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials