// App.jsx
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Landing-Page/LandingPage';
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
