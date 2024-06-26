import { useState } from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";
import { ErrorProvider } from "../contexts/Error";

const Homepage = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Jhansi",
    temp: 30,
    humidity: 47,
    feelsLike: 32,
    weather: "haze",
    wind: 15,
    gust: 2.7,
    visibility: 20000,
    pressure: 1100,
    grndlvl: 933,
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <ErrorProvider>
      <div>
        <Header />
        <SearchBox updateInfo={updateInfo} />
        <WeatherInfo info={weatherInfo} />
      </div>
    </ErrorProvider>
  );
};

export default Homepage;
