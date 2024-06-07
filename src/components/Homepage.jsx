import nightimg from "../assets/nightweather.jpg"

const Homepage = () => {
  return (
    <div className="p-0 m-0">
        <div className="h-screen">
            <h1 className="absolute font-bold tracking-wider text-white z-10 m-2 p-2 text-4xl italic">honest<span className="text-sky-500">Sky</span></h1>
            <img className="w-full absolute" src={nightimg} alt="nightweather" />
        </div>

        
  </div>
  ) 
};

export default Homepage;
