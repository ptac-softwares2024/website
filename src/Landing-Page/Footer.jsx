import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGlobe, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=" w-full rounded-lg p-4">
      <footer className="relative z-10 bg-dark text-black border shadow-2xl rounded-2xl p-2">
        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-1/3 lg:w-1/4">
            <div className="flex justify-center md:justify-start my-1">
              <p className=" text-black text-lg font-bold">© 2024 SRS SOFTWARES</p>
            </div>
            <div className="flex justify-center md:justify-start my-1 mt-5">
                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                  <div className="flex items-center">
                    <Link to="https://facebook.com" target="_blank" className="px-3 text-[#dddddd] hover:text-black">
                      <FaFacebook size={40} color='#1877F2'/>
                    </Link>
                    <Link to="https://twitter.com" target="_blank" className="px-3 text-[#dddddd] hover:text-black">
                      <FaTwitter size={40} color='#1DA1F2'/>
                    </Link>
                    <Link to="https://instagram.com" target="_blank" className="px-3 text-[#dddddd] hover:text-black">
                      <FaInstagram size={40} color='#C13584'/>
                    </Link>
                    <Link to="https://linkedin.com" target="_blank" className="px-3 text-[#dddddd] hover:text-black">
                      <FaLinkedin size={40} color='#0A66C2'/>
                    </Link>
                    <Link to="https://www.srssoftwares.in/" target="_blank" className="px-3 text-[#dddddd] hover:text-black">
                      <FaGlobe size={40} color='#000000'/>
                    </Link>
                  </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start my-1 mt-5">
                <div className="w-full px-2 mb-4 md:mb-0">
                  <div className="flex items-center w-full ">
                    <FaMapMarkerAlt size={30} className="text-black mr-2" />
                    <p className="text-[#000]  text-lg">123 Main St, City, Country</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaPhone size={30} className="text-black mr-2" />
                    <p className="text-[#000]  text-lg">+123 456 7890</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="w-full px-4 md:w-2/3 lg:w-3/4 mt-1">
            <div className="my-1">
              <div className="flex flex-wrap items-center justify-center md:justify-end -mx-2">
                {/* ERP Column */}
                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                  <h4 className="text-black mb-2 font-bold text-xl">ERP</h4>
                  <ul>
                    <li className='text-black  text-md'>
                      <Link to="/">ALTERNATIVE TO TALLY</Link>
                    </li>
                    <li className='text-black  text-md'>

                      <Link to="/">COMPARISON WITH ERP</Link>
                    </li>
                    <li className='text-black  text-md'>

                      <Link to="/">PURCHASE MANAGEMENT</Link>
                    </li>
                  </ul>
                </div>
                {/* CRM Column */}
                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                  <h4 className="text-black mb-2 font-bold text-xl">CRM</h4>
                  <ul>
                    <li className='text-black  text-md'>

                      <Link to="/">LEAD INTEGRATION</Link>
                    </li>
                    <li className='text-black  text-md'>

                      <Link to="/">OPPURTUNITY MANAGEMENT</Link>
                    </li>
                    <li className='text-black  text-md'>

                      <Link to="/">QUOTATIONS MANAGEMENT</Link>
                    </li>
                    {/* Add more CRM links as needed */}
                  </ul>
                </div>
                {/* AMC Column */}
                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                  <h4 className="text-black mb-2 font-bold text-xl">AMC</h4>
                  <ul>
                    <li className='text-black  text-md'>

                      <Link to="/">PRODUCT MANAGEMENT</Link>
                    </li>
                    <li className='text-black  text-md'>

                      <Link to="/">TICKETING SYSTEM</Link>
                    </li>
                    <li className='text-black  text-md'>

                      <Link to="/">PREVENTIVE MAINTENANCE</Link>
                    </li>
                  </ul>
                </div>
                {/* Links Column */}
                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                  <h4 className="text-black mb-2 font-bold text-xl">Links</h4>
                  <ul >
                    <li className='text-black text-md'>
                      <Link to="/about">ABOUT</Link>
                    </li>
                    <li className='text-black text-md'>
                    <Link to="/vision">VISION</Link>
                    </li>
                    <li className='text-black text-md'>
                    <Link to="/mission">MISSION</Link>
                    </li>
                    <li className='text-black text-md'>
                      <Link to="/gallery">PHOTO GALLERY</Link>
                    </li>
                    {/* Add more Links as needed */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
