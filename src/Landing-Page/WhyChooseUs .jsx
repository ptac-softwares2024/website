import React from 'react';
import { FaRegHandshake, FaUsers, FaHeadset, FaDollarSign, FaLightbulb, FaShieldAlt, FaClock, FaCogs, FaChartLine } from 'react-icons/fa';

const WhyChooseUs = () => {
  const cards = [
    {
      id: 1,
      title: 'Quality Service',
      bgColor: 'bg-red-500',
      icon: <FaRegHandshake size={35} color='white' />,
      description: 'We ensure top-notch quality in all our services. Our team is dedicated to providing the best solutions tailored to your needs. We use the latest technologies and methodologies to ensure you receive the highest quality service. Continuous improvement and customer satisfaction are our top priorities. Trust us for quality that exceeds expectations.',
    },
    {
      id: 2,
      title: 'Experienced Team',
      bgColor: 'bg-blue-500',
      icon: <FaUsers size={35} color='white' />,
      description: 'Our team comprises experienced professionals who are experts in their fields. With years of industry experience, we bring valuable insights and expertise to every project. We invest in continuous training and development to keep our skills sharp. Our team is passionate about delivering exceptional results. Rely on our experience for success.',
    },
    {
      id: 3,
      title: 'Customer Support',
      bgColor: 'bg-green-500',
      icon: <FaHeadset size={35} color='white' />,
      description: 'We offer 24/7 customer support to address all your queries and concerns. Our support team is friendly, knowledgeable, and ready to assist you anytime. We believe in building long-term relationships with our customers. Your satisfaction is our priority, and we go the extra mile to ensure it. Experience unmatched customer support with us.',
    },
    {
      id: 4,
      title: 'Affordable Pricing',
      bgColor: 'bg-yellow-500',
      icon: <FaDollarSign size={35} color='white' />,
      description: 'We offer competitive pricing without compromising on quality. Our pricing structure is transparent, with no hidden costs. We provide value for money and flexible pricing plans to suit your budget. Quality and affordability go hand in hand with us. Choose us for cost-effective solutions that deliver excellent results.',
    },
    {
      id: 5,
      title: 'Innovation',
      bgColor: 'bg-purple-500',
      icon: <FaLightbulb size={35} color='white' />,
      description: 'Innovation is at the core of everything we do. We constantly explore new ideas and technologies to stay ahead of the curve. Our innovative solutions help you achieve your goals faster and more efficiently. We embrace change and drive progress through creative thinking. Partner with us for cutting-edge solutions that set you apart.',
    },
    {
      id: 6,
      title: 'Trustworthy',
      bgColor: 'bg-pink-500',
      icon: <FaShieldAlt size={35} color='white' />,
      description: 'Trust is the foundation of our business. We operate with integrity and transparency in all our dealings. Our clients trust us to deliver on our promises and uphold the highest standards of professionalism. We value your trust and work hard to earn it. Depend on us for reliable and trustworthy service.',
    },
    {
      id: 7,
      title: 'Timely Delivery',
      bgColor: 'bg-indigo-500',
      icon: <FaClock size={35} color='white' />,
      description: 'We understand the importance of meeting deadlines. Our team is committed to delivering projects on time, every time. We use efficient project management techniques to ensure timely delivery. Delays are not an option for us, and we strive to exceed your expectations. Count on us for punctual and reliable service.',
    },
    {
      id: 8,
      title: 'Customization',
      bgColor: 'bg-teal-500',
      icon: <FaCogs size={35} color='white' />,
      description: 'We offer tailored solutions to meet your unique requirements. Our team works closely with you to understand your needs and deliver customized solutions. Flexibility and personalization are key aspects of our service. We adapt to your specific needs and preferences. Get bespoke solutions that fit your business perfectly.',
    },
    {
      id: 9,
      title: 'Scalable Solutions',
      bgColor: 'bg-orange-500',
      icon: <FaChartLine size={35} color='white' />,
      description: 'Our solutions are designed to grow with your business. We provide scalable services that can adapt to your changing needs. Whether you’re a small startup or a large enterprise, we have the right solutions for you. Scalability ensures that our services remain effective as your business expands. Trust us for growth-ready solutions.',
    },
  ];

  return (
    <div className="p-4">
        <h2 className="text-3xl font-bold text-center flex items-center justify-center gap-4">
        <span className='text-[#4FA9D7]'>WHY CHOOSE US</span>
        <FaLightbulb size={40} className="text-[#4FA9D7]" />
          </h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card.id} className={`${card.bgColor} text-white p-6 rounded-2xl shadow-2xl flex flex-col items-center hover:scale-105 cursor-pointer`}>
            <div className='flex flex-row gap-3'>
              <span className="text-2xl font-bold mt-4">{card.icon}</span>
              <h3 className="text-2xl font-bold mt-4 ">{card.title.toLocaleUpperCase()}</h3>
            </div>
            <div className='p-2'>
                <p className="mt-2 text-justify ">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
