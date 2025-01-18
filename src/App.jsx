import React from 'react';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Footer />
      <Routes>
      {/*}  <Route path="/tracking" element={<Tracking />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Add other routes */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
