import { useState } from "react";
import { API_URL, API_KEY } from "../utils/constants";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  let getWeatherInfo = async () => {
    try {
      //fetching the openweatherAPI
      let data = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let json = await data.json();
      console.log(json);

      let result = {
        city: city,
        temp: json.main.temp,
        humidity: json.main.humidity,
        feelsLike: json.main.feels_like,
        weather: json.weather[0].description,
        wind: json.wind.speed,
        gust: json.wind.gust,
        visibility: json.visibility,
        pressure: json.main.pressure,
        grndlvl: json.main.grnd_level,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      console.log(city);
      setError("");
    } catch {
      setError(true);
    }
  };

 

  return   (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="relative top-32 w-96 p-4 rounded-lg dark:text-gray-50 dark:bg-gray-900"
          placeholder="Enter your City"
          value={city}
          onChange={handleChange}
          required
        />
        <button className="relative top-32 left-4 p-3 rounded-lg bg-blue-500 hover:opacity-90 text-white dark:bg-gray-900">
          SEARCH
        </button>
        {error && (
          <p className="text-red-600 font-semibold absolute mx-5 mt-36 dark:bg-gray-900">
            No such place exists
          </p>
        )}
      </form>
    </div>
  );
};

export default SearchBox;
