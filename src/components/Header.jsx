import weatherImg from "../assets/nightweather.jpg";

const Header = () => {
  return (
    <div>
      <div>
        <h1 className="absolute font-bold tracking-wider text-white z-10 m-2 p-2 text-4xl italic">
          honest<span className="text-sky-500">Sky</span>
        </h1>
      </div>
      <img
        className="w-full h-56 absolute"
        src={weatherImg}
        alt="nightweather"
      />
    </div>
  );
};

export default Header;
