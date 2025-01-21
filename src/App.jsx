/* eslint-disable react/prop-types */
import "./App.css";
import Header from "./Header";
import Div1 from "./Div1";
import Blog from "./Blog";
import Footer from "./Footer";
import Shipping from "./context/Shipping";
import PrivatePolicy from "./context/PrivatePolicy";
import Terms from "./context/Terms";
import Return from "./context/Return";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
  <Header/>
  <Div1/>

    <div className="app-container">
      <header className="header">
        <h1>Exploring Our Unique Collections</h1>
      </header>
      <div className="Cards">
      <Card image="https://150698241.v2.pressablecdn.com/coffee-store/wp-content/uploads/sites/341/2024/11/ct1-1.png" title="Beautiful Sunset" />
      <Card image="https://150698241.v2.pressablecdn.com/coffee-store/wp-content/uploads/sites/341/2024/11/ct1-1.png" title="Beautiful Sunset" />
      <Card image="https://150698241.v2.pressablecdn.com/coffee-store/wp-content/uploads/sites/341/2024/11/ct1-1.png" title="Beautiful Sunset" />
      </div>
  <Blog></Blog>
    </div>
    <Router>
      <div>
        <Routes>
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/privacy-policy" element={<PrivatePolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/return" element={<Return />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </>

  );
};

export default App;

function Card({image,title}) {
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
      </div>
    </div>
  );
}
