import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpeg";
import ava02 from "../../assets/all-images/ava-2.jpeg";
import ava03 from "../../assets/all-images/ava-3.jpeg";
import ava04 from "../../assets/all-images/ava-4.jpeg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently rented a bike from your company, and I had a fantastic experience. The rental process was straightforward and hassle-free. The bike I received was in great condition, and it made my day of exploration so much more enjoyable. Your team was friendly and helpful, ensuring I had all the information I needed for a safe ride. I appreciate your affordable rates and the convenience of your service.  Thank you for providing such a great bike rental experience
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ajith</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I can't say enough good things about my bike rental experience with your company. The bikes are well-maintained and comfortable, making it a joy to explore the city. The rental process was quick and efficient, and the staff was extremely helpful in recommending routes and sights to see. I'll be back for another rental soon!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Vijay</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I rented a bike from your company for a weekend getaway, and I couldn't have been happier with my choice. The bikes were top-notch, and the service was friendly and professional. I felt safe and well-informed throughout my rental. The convenience and affordability of your rentals are unmatched. I had a blast and will be a repeat customer for sure!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Suriya</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I rented a bike for a family outing, and it was a wonderful experience. The bikes were suitable for all ages, and the kids had a blast. The staff was patient and accommodating, ensuring our entire family had a great time. We appreciate your dedication to customer satisfaction and will definitely rent from you again on our next adventure.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Siva</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
