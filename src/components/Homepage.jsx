import weatherImg from "../assets/nightweather.jpg";

const Homepage = () => {
  return (
    <div className="fullpage">
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
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="relative top-40 bottom-0 right-0 left-0 w-96 p-4 rounded-lg text-black"
          placeholder="Enter your City"
        />
        <button className="relative top-40 left-4 p-3 rounded-lg bg-blue-500 hover:opacity-90 text-white">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Homepage;
