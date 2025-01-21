import "./App.css";
import Header from "./Header";
import Div1 from "./Div1";
import Blog from "./Blog";
import Footer from "./Footer";
import Shipping from "./context/Shipping";
import PrivatePolicy from "./context/PrivatePolicy";
import Terms from "./context/Terms";
import Return from "./context/Return";
import NewCollection from "./components/NewCollection";
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
      <Section_Exploring/>
      <Next_Exploring_Our_Unique/>
  <Blog></Blog>
    </div>
    <Router>
      <div>
        <Routes>
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/privacy-policy" element={<PrivatePolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/return" element={<Return />} />
          <Route path="/" element={<NewCollection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
    
    </>

  );
};

export default App;

