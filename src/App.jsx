/* eslint-disable react/prop-types */
import "./App.css";

const App = () => {
  return (
    <div className="app-container bg-[#6d4c41] text-white font-sans text-center">
      <div className="relative bg-cover bg-center bg-[url('https://www.albayan.ae/assets/archives/images/2018/11/15/3410328.jpg')]">
      <h1 className="text-white relative z-10">Exploring Our Unique Collections </h1>
      <div className="absolute inset-0 bg-[#6d4c41]/80"></div> 

        <div className="min-h-screen flex items-center justify-center">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-screen text-center items-center justify-center relative">
            <Card image=".\images\black-roast.png" title="Beautiful Sunset" />
            <Card image=".\images\bulk-packs.png" title="Bulk Packs" />
            <Card image=".\images\iced-coffees.png" title="Iced Coffees" />
            <Card image=".\images\velvet-roast.png" title="Blended" />
            <Card image=".\images\cold-brews.png" title="Cold Brews" />
            <Card image=".\images\instant-made.png" title="Instant Made" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

function Card({ image, title }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg Card">
      <img className="w-full" src={image} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
}