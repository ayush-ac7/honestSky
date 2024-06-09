import thunderstorm from "../assets/thunderstorm.png";
import sunny from "../assets/sunny.png";
import cold from "../assets/cold.png";

const WeatherInfo = ({ info }) => {
  const { city, temp, weather, humidity, wind, gust, feelsLike, visibility, pressure, grndlvl } = info;

  return (
    <div className="mt-52 mx-8 shadow-2xl p-2">
      <div className="border-gray-200 max-w-2xl pb-4 border-b-2 tracking-wider text-xl font-light">
        Current Weather
      </div>
      <div className="flex items-center gap-5 mt-4">
        <div className="text-4xl font-semibold flex items-center py-2">
        {
          <img
            className="w-12"
            src={humidity > 80 ? thunderstorm : temp > 15 ? sunny : cold}
          />
        }
          {city[0].toUpperCase() + city.slice(1)}
          <span className="font-light text-2xl ml-4"> { temp}&deg;C</span>
        </div>
        <p className="pl-4 border-l-2 border-black">{ new Date().toLocaleString()}</p>
      </div>
      <div className="my-6 text-lg">
        
        {weather[0].toUpperCase() + weather.slice(1)}
        <span className="ml-64 text-base">
          RealFeel® {Math.floor(feelsLike)}&deg;
        </span>
      </div>
      <div className="info2 flex">
        <div>
          <p className="border-gray-100 w-56 border-b-2 my-4">
            Humidity <span className="ml-32">{humidity}</span>
          </p>
          <p className="border-gray-100 w-56 border-b-2 my-4">
            Wind
            <span className="ml-32">
              {Math.round(wind * 3.6 * 100) / 100}km/h
            </span>
          </p>
          <p className="border-gray-100 w-56 border-b-2">
            Wind Gust<span className="ml-28">{gust}</span>
          </p>
        </div>
        <div className="ml-36">
          <p className="border-gray-100 w-56 border-b-2 my-4">Pressure <span className="ml-24">{pressure} mb</span></p>
          <p className="border-gray-100 w-56 border-b-2 my-4">Visibility <span className="ml-28">{visibility * 0.001} km</span></p>
          <p className="border-gray-100 w-56 border-b-2 my-4">ground level<span className="ml-24">{grndlvl}</span></p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
