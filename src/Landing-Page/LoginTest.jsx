import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
// import { api2 } from '../components/Common/apiURL';
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import LandingNavbar from './LandingNavbar';
const api2 = ''
const LoginPageUpdated = () => {
  const [step, setStep] = useState(1);
  const [LogID, setLogID] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const [response, setResponse] = useState({});
  const BASE_URL = api2;
  const navigate = useNavigate()

  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 200 });
  const slideIn = useSpring({ from: { transform: 'translateY(50px)' }, to: { transform: 'translateY(0)' }, delay: 400 });

  useEffect(() => {
    if (loginError) {
      const timer = setTimeout(() => {
        setLoginError('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loginError]);

  const handleLoginClick = async () => {
    if (step === 1) {
      const newErrors = {};
      if (!LogID) newErrors.LogID = 'LogID is required';
      if (!password) newErrors.password = 'Password is required';

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        setErrors({});
        console.log('LogID:', LogID);
        console.log('Password:', password);

        const credentials = {
          LogID: LogID.toUpperCase(), // Ensure LogID is in uppercase
          LogPwd: password,
        };

        try {
          const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
          console.log(response.data);
          setResponse(response.data)
          const userData = response.data.responseData;
          const token = response.data.token;

          if (userData && userData.Branch) {
            localStorage.setItem("token", token);
            localStorage.setItem("userInfo", JSON.stringify(userData.UserID));
            localStorage.setItem("Depo", JSON.stringify(userData.Branch));
            Cookies.set("token", token, { expires: 4 / 24 });
            setStep(2);
          } else {
            setLoginError("Incorrect credentials");
          }
        } catch (error) {
          console.error("Error logging in:", error);
          if (error.response && error.response.status === 450) {
            setLoginError("Wrong Credentials");
          } else {
            setLoginError("Internal Server Error. Please try again later.");
          }
        }
      }
    } else {
        // Handle verification logic here
        const newErrors = {};
        if (!selectedLocation) newErrors.selectedLocation = 'Branch is required';
        if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        setErrors({});
        console.log('Branch :', selectedLocation);
            
        const token = Cookies.get("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                token: token,
            },
        };

        const credentials = {
          LogID: LogID.toUpperCase(), // Ensure LogID is in uppercase
          Depo: selectedLocation.DPCode,
        };
        try {
          const response = await axios.post(`${BASE_URL}/auth/setNewBranch`, credentials , config);
            console.log(response.data);
            const LogNo = response.data.LogNo;
            const menu = response.data.formDetails; 
          if (response.data && response.data.formDetails) {
            localStorage.setItem("LogValue", LogNo);
            localStorage.setItem("Menu", JSON.stringify(menu)); 
            localStorage.setItem("selectedLocation", selectedLocation);
            localStorage.setItem("cName", userData.CName);
            localStorage.setItem("isLoggedIn", true);
            navigate("/dashboard");
            handleLogin();
              
            setStep(2);
          } else {
              setLoginError("Error during branch selection. Please try again later.");
          }
        } catch (error) {
          console.error("Error during branch selection:", error);
          if (error.response && error.response.status === 450) {
            setLoginError("Wrong Credentials");
          } else {
            setLoginError("Internal Server Error. Please try again later.");
          }
        }
      }

         
    }
  };
    
    
    let userData = JSON.parse(localStorage.getItem('userInfo'))
    
    if (userData) {
        userData = userData[0]
    }

    const userDepot = JSON.parse(localStorage.getItem('Depo'))

    const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    };
    
  return (
    <>
    <LandingNavbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#fff] via-[#4FA9D7] to-[#fff]">
    <div className="flex flex-col md:flex-row  max-w-7xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="w-full md:w-1/2 block rounded-2xl ">
          <img
            src={
              step === 1
                ? 'https://plus.unsplash.com/premium_vector-1682310589749-4964e0999890?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                : 'https://plus.unsplash.com/premium_vector-1682310585565-9e4fe541c886?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt="Illustration"
            className="object-contain w-full h-full p-4 rounded-2xl"
          />
        </div>
        <animated.div style={fadeIn} className="w-full md:w-1/2 p-8 shadow-2xl">
          <animated.h1 style={slideIn} className="text-3xl font-bold text-center mb-8">
            {step === 1 ? <img src={Logo} className='h-[100px] rounded-2xl w-full object-contain'/> : <h1 className='text-[#4FA9D7]'>Welcome Back, <br/>{userData?.CName}</h1>}
          </animated.h1>
          {step === 1 ? (
            <form className=''>
              <div className="mb-4">
                <label className="block text-black font-bold mb-2" htmlFor="LogID">
                  LogID
                </label>
                <input
                  className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none"
                  id="LogID"
                  type="text"
                  placeholder="Enter your LogID"
                  value={LogID}
                  onChange={(e) => setLogID(e.target.value)}
                />
                {errors.LogID && <p className="text-red-500 text-sm">{errors.LogID}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-black font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
            </form>
          ) : (
            <form>
              <div className="mb-4">
                <label className="block text-black font-bold mb-2" htmlFor="location">
                  Select Your Branch
                </label>
                <select
                  className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none"
                  id="location"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                >
                  <option value="">Select your branch</option>
                  {userDepot.map((location, index) => (
                    <option key={index} value={location.DPName}>
                      {location.DPName}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          )}
          {loginError && <p className="text-red-500 text-center">{loginError}</p>}
          <button
            className="w-full bg-[#4FA9D7] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            type="button"
            onClick={handleLoginClick}
          >
            {step === 1 ? 'Login' : 'Verify'}
          </button>
          <div className="mt-8 text-justify">
            <p className="text-gray-600">
              {step === 1
                ? 'Welcome to SRS Softwares, your solution for comprehensive ERP management.'
                : 'Please verify your location to continue using our advanced software tools.'}
            </p>
            <p className="text-gray-600 mt-2">
              {step === 1
                ? 'Manage your business efficiently with our advanced software tools.'
                : 'Ensure secure and efficient management of your business operations.'}
            </p>
          </div>
        </animated.div>
      </div>
      </div>
    </>
  );
};

export default LoginPageUpdated;
