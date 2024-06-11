import thunderstorm from "../assets/thunderstorm.png";
import sunny from "../assets/sunny.png";
import cold from "../assets/cold.png";
import StraightIcon from "@mui/icons-material/Straight";
import { COLD_URL, HOT_URL, RAIN_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { ErrorContext } from "../contexts/Error";

const WeatherInfo = ({ info }) => {
  const { error } = useContext(ErrorContext);

  //destructuring objects for better clarity
  const {
    city,
    temp,
    weather,
    humidity,
    wind,
    gust,
    feelsLike,
    visibility,
    pressure,
    grndlvl,
  } = info;

  return error ? (
    //used ternary operator if encounter any error then show error message if not then show the weather info
    <p className="text-center p-6 tracking-widest dark:bg-gray-900 dark:text-white">
      PLEASE TRY AGAIN WITH PROPER NAME
    </p>
  ) : (
    <div className="p-6 px-2 md:px-0  flex items-center justify-center dark:bg-gray-900 ">
      <div className="shadow-2xl p-2 w-auto">
        <h1 className="border-gray-200 dark:border-gray-50 dark:border-b-[1px] dark:text-white max-w-2xl pb-4 border-b-2 tracking-wider text-xl text-center font-bold">
          Current Weather
        </h1>
        <div className="leftSide-weatherInfo flex items-center justify-between gap-2 md:gap-8 mt-2">
          <div className="flex items-center justify-between py-2">
            {
              <img
                className="w-8 md:w-10"
                src={humidity > 80 ? thunderstorm : temp > 15 ? sunny : cold}
              />
            }
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-white">{city[0].toUpperCase() + city.slice(1)}</h2>
            <span className="font-light  dark:text-white ml-2 pr-10 md:pr-0 text-md md:text-2xl">
              {temp}&deg;C
            </span>
          </div>
          <p className="border-black border-l-[1px] md:border-l-0 pl-4 md:pl-0 text-sm md:text-base dark:border-white dark:text-white text-center">
            {new Date().toLocaleString()}
          </p>
        </div>
        <div className="p-2 py-4 md:py-3 px-1 md:px-0 dark:text-white text-lg decoration-dashed flex justify-between">
          <h2>{weather[0].toUpperCase() + weather.slice(1)}</h2>
          <h2>RealFeel {Math.floor(feelsLike)}&deg;</h2>
        </div>
        <div className="rightSide-weatherInfo flex justify-between gap-4 md:gap-8 dark:text-white">
          <div>
            <p className="border-gray-100 dark:border-b-[1px] border-b-2 py-5 md:py-4">
              Humidity <span className="ml-10 md:ml-28">{humidity}%</span>
            </p>
            <p className="border-gray-100 dark:border-b-[1px] border-b-2 py-4">
              Wind
              <span className="ml-12 md:ml-28">
                {Math.round(wind * 3.6 * 100) / 100}km/h
              </span>
            </p>
            <p className="border-gray-100 dark:border-b-[1px] border-b-2 py-4 ">
              Wind Gust<span className="ml-8 md:ml-28">{gust}</span>
            </p>
          </div>
          <div>
            <p className="border-gray-100 dark:border-b-[1px] border-b-2 py-4 md:py-[10px]">
              Pressure
              <span className="ml-0 text-sm md:text-base md:ml-24">
                <StraightIcon className="mb-2 md:mb-3" />
                {pressure} mb
              </span>
            </p>
            <p className="border-gray-100 dark:border-b-[1px] border-b-2 py-4">
              Visibility
              <span className="ml-10 md:ml-36">{visibility * 0.001} km</span>
            </p>
            <p className="border-gray-100 dark:border-b-[1px] border-b-2 py-4">
              Ground level<span className="ml-6 md:ml-32">{grndlvl}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
