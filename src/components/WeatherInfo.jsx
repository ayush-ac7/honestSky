import thunderstorm from "../assets/thunderstorm.png";
import sunny from "../assets/sunny.png";
import cold from "../assets/cold.png";
import StraightIcon from "@mui/icons-material/Straight";
import { COLD_URL, HOT_URL, RAIN_URL } from "../utils/constants";
import { useContext, useState } from "react";
import {ErrorContext} from "../contexts/Error";



const WeatherInfo = ({ info}) => {

  const{error, setError} = useContext(ErrorContext);

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

  return (error) ? <p>please try again</p> : (
    
    <div className=" shadow-2xl p-6 flex items-center dark:bg-gray-900">
      <div className="left section shadow-2xl p-2">
        <div className="border-gray-200 dark:border-gray-50 dark:border-b-[1px] dark:text-white max-w-2xl pb-4 border-b-2 tracking-wider text-xl font-light">
          Current Weather
        </div>
        <div className="info1 flex items-center gap-5 mt-4">
          <div className="text-4xl dark:text-white font-semibold flex items-center py-2">
            {
              <img
                className="w-12"
                //ternary operator for showing weather icons according to current weather
                src={humidity > 80 ? thunderstorm : temp > 15 ? sunny : cold}
              />
            }
            {city[0].toUpperCase() + city.slice(1)}
            <span className="font-light dark:text-white text-2xl ml-4">
              {temp}&deg;C
            </span>
          </div>
          <p className="pl-4 border-l-2 border-black dark:border-white dark:text-white">
            {new Date().toLocaleString()}
          </p>
        </div>
        <div className="my-6 dark:text-white text-lg decoration-dashed">
          {weather[0].toUpperCase() + weather.slice(1)}
          <span className="ml-64 text-base">
            RealFeel® {Math.floor(feelsLike)}&deg;
          </span>
        </div>
        <div className="info2 flex dark:text-white">
          <div>
            <p className="border-gray-100  w-56 dark:border-b-[1px] border-b-2 my-4">
              Humidity <span className="ml-28">{humidity}%</span>
            </p>
            <p className="border-gray-100 dark:border-b-[1px] w-56 border-b-2 my-4">
              Wind
              <span className="ml-28">
                {Math.round(wind * 3.6 * 100) / 100}km/h
              </span>
            </p>
            <p className="border-gray-100 dark:border-b-[1px]  w-56 border-b-2">
              Wind Gust<span className="ml-28">{gust}</span>
            </p>
          </div>
          <div className="ml-36">
            <p className="border-gray-100 dark:border-b-[1px]  w-56 border-b-2 my-4">
              Pressure
              <span className="ml-16">
                <StraightIcon />
                {pressure} mb
              </span>
            </p>
            <p className="border-gray-100 dark:border-b-[1px]  w-56 border-b-2 my-4">
              Visibility <span className="ml-28">{visibility * 0.001} km</span>
            </p>
            <p className="border-gray-100 dark:border-b-[1px] w-56 border-b-2 my-4">
              Ground level<span className="ml-24">{grndlvl}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="right section">
        <img
          src={humidity > 80 ? RAIN_URL : temp > 16 ? HOT_URL : COLD_URL}
          className=" min-w-xl max-w-lg mx-14 shadow-lg shadow-black rounded-lg "
        />
      </div>
    </div>
  );
};

export default WeatherInfo;
