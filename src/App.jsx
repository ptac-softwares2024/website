// src/App.jsx
import LandingPage from './Landing-Page/LandingPage'
import LoginPage from './Landing-Page/LoginTest'
import NotFoundPage from './Landing-Page/NotFoundPage'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
