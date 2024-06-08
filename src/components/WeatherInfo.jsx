const WeatherInfo = ({ info }) => {
  const { city, temp, weather, humidity, wind, gust, feelslike } = info;

  return (
    <div className="mt-52 mx-8 ">
      <div className="border-gray-200 max-w-2xl pb-4 border-b-2 tracking-wider text-xl font-light">
        Current Weather
      </div>
      <div className="flex items-center gap-5 mt-4">
        <div className="text-4xl font-semibold">
          {city[0].toUpperCase() + city.slice(1)}
          <span className="font-light text-2xl ml-1"> {temp}&deg;C</span>
        </div>
        <p className="pl-4 border-l-2 border-black">time</p>
      </div>
      <div className="my-6 text-lg">
        {weather[0].toUpperCase() + weather.slice(1)}
        RealFeel{feelslike}
      </div>
      <div>
        <p className="border-gray-100 w-56 border-b-2 my-4">
          Humidity <span className="ml-32">{humidity}</span>
        </p>
        <p className="border-gray-100 w-56 border-b-2 my-4">
          Wind <span className="ml-28">{Math.round(wind * 3.6 * 100) / 100}km/h</span>
        </p>
        <p className="border-gray-100 w-56 border-b-2">Wind Gust<span className="ml-28">{gust}</span></p>
      </div>
    </div>
  );
};

export default WeatherInfo;
