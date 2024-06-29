import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      &gt;
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      &lt;
    </div>
  );
};

const ImageCarousel = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const images = [
    'https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149368728.jpg?t=st=1719573626~exp=1719577226~hmac=edec91160fe87d0a86d7229675f90396c50c9b4bd733f597dfb4008a1c518c30&w=996',
    'https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149379505.jpg?w=1060&t=st=1719573706~exp=1719574306~hmac=bb5ef413a2bc5fe777b5f414a85649863625071caf32a3923aa080465da09465',
    'https://img.freepik.com/free-vector/hand-drawn-flat-design-intranet-illustration_23-2149379501.jpg?w=1060&t=st=1719573721~exp=1719574321~hmac=c67c0aafa633ceba1e8b78a7eaf2961899fa4d94ed381780dae862b860cc868c',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true, // Enables the fade effect
    cssEase: 'linear',
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

    const services = [
    { name: 'ERP', description: 'Enterprise Resource Planning system that integrates core business processes.' },
    { name: 'CRM', description: 'Customer Relationship Management system for managing customer interactions and data.' },
    { name: 'AMC', description: 'Annual Maintenance Contract management system for service and support of products.' },
    { name: 'HRM', description: 'Human Resource Management system for managing employee data and processes.' },
    { name: 'E-Commerce', description: 'E-Commerce platform for online sales and transactions.' },
  ];


  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);

  }, [services.length]);

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden p-4 relative  transition-opacity duration-2000 ${
        inView ? 'opacity-100' : 'opacity-0'
      } `}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative p-6 bg-white shadow-md rounded-2xl top-10 bottom-15">
            <img src={image} alt={`Carousel ${index + 1}`} className="w-full h-[400px] object-contain" />
            <div className="absolute hidden lg:block top-[25%] left-10 w-[25%] text-white p-4">
                <h1 className='text-black font-bold text-4xl'>SRS <span className='text-[#4FA9D7]'>Softwares</span></h1>
                <h1 className="text-[#000] font-bold text-2xl ml-3 mt-5 duration-500"> # {services[currentServiceIndex].name}</h1>
                <p className="text-[#4FA9D7] font-semibold text-justify text-lg mt-1 ml-5">{services[currentServiceIndex].description}</p>
            </div>
          </div>
          ))}
          </Slider>
    </div>
  );
};

export default ImageCarousel;
