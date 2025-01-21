import Card from "../components/Card"

function Next_Exploring_Our_Unique () {
  
    return (
      <div className="app-container bg-[#f3daa2] text-[##6d4c41] font-sans text-center ">
        <div className="relative bg-cover bg-center bg-[url('https://www.nescafe.com/gb/sites/default/files/2023-11/Untitled-5%20copy_6.jpg')]">
        <div className="absolute inset-0 bg-[#FFF1D3]/80"></div> 
  
  
          <div className="min-h-screen flex items-center justify-center">
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-h-screen text-center items-center justify-center relative ">
              <Card image=".\images\hazelnut-harmony.png" title="Hazelnut Harmony" button_name="Add to cart" price="119$"/>
              <Card image=".\images\bistro-reserve.png" title="Sunrise Blend" button_name="Add to cart" price="69$"/>
              <Card image=".\images\sunrise-blend.png" title="Morning Symphony" button_name="Add to cart" price="55$"/>
              <Card image=".\images\vanila-cloudburst.png" title="Vanilla Cloudburst" button_name="Add to cart" price="79$"/>
              <Card image=".\images\harvest-blend.png" title="Harvest Blend" button_name="Add to cart" price="90$"/>
              <Card image=".\images\velvet-fusion.png" title="Velvet Fusion" button_name="Add to cart" price="98$"/>
              <Card image=".\images\peak-blend.png" title="Peak Blend" button_name="Add to cart" price="80$"/>
              <Card image=".\images\morning-symphony.png" title="Bistro Reserve" button_name="Add to cart" price="79$"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Next_Exploring_Our_Unique