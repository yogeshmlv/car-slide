import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [
    { url: "http://localhost:3000/s60_recharge.jpg", title: "s60 Recharge" },
    { url: "http://localhost:3000/s90_recharge.jpg", title: "XC90 Recharge" },
    { url: "http://localhost:3000/v60_recharge.jpg", title: "V60 Recharge" },
    { url: "http://localhost:3000/v90_recharge.jpg", title: "V90 Recharge" },
    { url: "http://localhost:3000/xc60_recharge.jpg", title: "xc60 Recharge" },
    { url: "http://localhost:3000/xc90_recharge.jpg", title: "xc60 Recharge" },
    { url: "http://localhost:3000/xc40_recharge.jpg", title: "xc60 Recharge" },
  ];
  const containerStyles = {
    width: "800px",
    height: "280px",
    margin: "0 auto",
  };
  const containerStyles1 = {
    width: "800px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Car Design</h1>
      <div style={containerStyles}>
      <div style={containerStyles1}>
        <ImageSlider slides={slides} />
      </div>
    </div>
    </div>
  );
};

export default App;
