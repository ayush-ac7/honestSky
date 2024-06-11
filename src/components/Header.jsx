import weatherImg from "../assets/weather.jpg";
import ThemeBtn from "./ThemeBtn";

const Header = () => {
  return (
    <header className="relative w-full h-56 flex flex-col">
      <img
        className="absolute inset-0 object-cover w-full h-full z-0" // Ensure image fills container
        src={weatherImg}
        alt="nightweather"
      />
      <div className="flex justify-between items-center w-full z-10 p-6">
        <h1 className="font-bold tracking-wider text-white text-2xl md:text-4xl italic">
          honest<span className="text-sky-400">Sky</span>
        </h1>
        <ThemeBtn />
      </div>
    </header>
  );
};


export default Header;
