import React from 'react'
import './Testimonials.css'
import Ava1 from '../../assets/fitz-avatar.jpg'
import Ava2 from '../../assets/derp.jpeg'
import Blinkin from '../../assets/blinkin.jpeg'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Pagination, Navigation, Scrollbar } from "swiper"

const data = [
{
  avatar: Ava1,
  name: 'CaptainPopCulture',
  review: "When I was a young teenager, I had the ambition to own and run my own comic and toy shop. I spent many years collecting and preparing to one day have the means to fulfill my dream. Suffice it to say, I built up a large inventory of collectibles, but never a way to sell them. I never thought I was going to afford to have my own shop. This is where Cliff stepped in. Having known me for several years, he knew exactly what my ambitions were. Cliff suggested to me that I delve into the expanding world of online commerce. Now I know next to nothing when it comes to these things. I’m not very skilled in computer programming. Cliff assured me that this would not be a problem. He showed me some online tools and easy ways to run a shop online. Cliff then proceeded to take it upon himself to start building my online shop. Within only a few short hours, Cliff had made a template for a store that would allow me to follow my dream. Within only a few short days, my online shop was up and running. Now thanks to Cliff Folsom, I can finally say that I am a comic and toy shop owner. Feel free to look at his amazing work at CaptainPopCulture.com. I would not have been able to do this without him, and I highly recommend him for any of your project needs. You will not be disappointed. 5 out of 5 Stars! -Michael Fitzgerald-"
},
{
  avatar: Ava2,
  name: "Someone Else",
  review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet consectetur, aut inventore debitis a sunt minus quos animi eligendi deserunt aliquam assumenda, corporis impedit reprehenderit molestias doloribus culpa. Odit tenetur et quidem velit, iste doloremque ut! Laboriosam totam assumenda delectus eum dolor tenetur voluptatibus temporibus eius, placeat iure, neque asperiores!"
},
{
  avatar: Blinkin,
  name: "My Mom",
  review: "Lorem ipsum dolor sit, amet consectetur adipiisicing elit."
}
]

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
              // install Swiper modules
      
              modules={[Navigation, Pagination, Scrollbar ]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
      >
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