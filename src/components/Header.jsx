import weatherImg from "../assets/weather.jpg";
import ThemeBtn from "./ThemeBtn";

const Header = () => {
  return (
    <div>
      <div>
        <h1 className="absolute font-bold tracking-wider text-white z-10 m-2 p-2 text-4xl italic">
          honest<span className="text-sky-500">Sky</span>
        </h1>
      </div>

      <div>
        <div className="absolute right-3 left- mt-2">
          <ThemeBtn />
        </div>
        <img
          className="w-full h-56 static"
          src={weatherImg}
          alt="nightweather"
        />
      </div>
    </div>
  );
};

export default Header;
