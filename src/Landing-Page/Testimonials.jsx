import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaUserAlt } from 'react-icons/fa';

const testimonialsData = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO',
    message: 'PTAC has transformed how we manage our operations. It integrates seamlessly with our existing systems, streamlining processes and boosting productivity.',
    image: 'https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    bgColor: '#FDE68A', // Unique background color for each testimonial
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Manager',
    message: 'With PTAC, we’ve seen a significant improvement in customer satisfaction. Its robust CRM capabilities help us stay connected with our clients more effectively.',
    image: 'https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    bgColor: '#A7F3D0', // Unique background color for each testimonial
  },
  {
    name: 'Amit Singh',
    role: 'IT Head',
    message: 'PTAC’s comprehensive document management features have made our workflows more efficient. We can now easily manage and access documents from anywhere.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    bgColor: '#FBCFE8', // Unique background color for each testimonial
  },
  {
    name: 'Anjali Patel',
    role: 'HR Manager',
    message: 'The payroll module in PTAC simplifies our payroll processing. It’s accurate, easy to use, and has saved us a lot of time and effort.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    bgColor: '#C7D2FE', // Unique background color for each testimonial
  },
  {
    name: 'Sandeep Verma',
    role: 'Finance Director',
    message: 'PTAC’s manufacturing module has helped us optimize production processes and improve product quality. It’s a game-changer for our manufacturing operations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    bgColor: '#FECACA', // Unique background color for each testimonial
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('next');
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialsData.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setSlideDirection('next');
    setCurrentSlide((currentSlide + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setSlideDirection('prev');
    setCurrentSlide((currentSlide - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="p-2">
      <div className="container mx-auto py-12 ">
        <h2 className="text-3xl font-bold text-center flex items-center justify-center gap-4">
          <span className='text-[#4FA9D7]'>CLIENT TESTIMONIALS</span>
          <FaUserAlt size={40} className="text-[#4FA9D7]" />
        </h2>
        <div className="relative flex items-center justify-center mt-5">
          <button
            className="absolute left-[0%] top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 focus:outline-none z-10"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <FaChevronLeft className="h-6 w-6 text-white" />
          </button>
          <div
            className={`rounded-lg shadow-2xl overflow-hidden flex items-center justify-center h-[230px] bg-white transition-opacity duration-1000 ${
              slideDirection === 'next' ? 'fade-in' : 'fade-in-reverse'
            } hover:scale-95 duration-500 cursor-pointer`}
            style={{ backgroundColor: testimonialsData[currentSlide].bgColor }}
          >
            <div className="px-6 py-6 text-center">
              <FaQuoteLeft className="text-4xl hidden lg:block text-gray-400 mb-4" />
              <p className="text-black text-justify text-lg font-semibold cursor-pointer mt-2">
                {testimonialsData[currentSlide].message}
              </p>
              <div className="flex items-center justify-center mt-4">
                <img
                  className="rounded-full w-12 h-12 object-cover mr-4"
                  src={testimonialsData[currentSlide].image}
                  alt={testimonialsData[currentSlide].name}
                />
                <div>
                  <p className="font-extrabold text-md">{testimonialsData[currentSlide].name}</p>
                  <p className="text-gray-600 font-semibold">{testimonialsData[currentSlide].role}</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute right-[0%] top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 focus:outline-none z-10"
            onClick={nextSlide}
            aria-label="Next"
          >
            <FaChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
