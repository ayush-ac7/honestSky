import { useContext, useState } from "react";
import { API_URL, API_KEY } from "../utils/constants";
import { ErrorContext } from "../contexts/Error";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const { error, setError } = useContext(ErrorContext);

  let getWeatherInfo = async () => {
    //handling errors
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

  return (
    <div className="flex justify-center items-center gap-2 dark:bg-gray-900">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-80 mx-6 my-2 md:mx-0 md:my-3 p-2 border-2 rounded-lg dark:text-gray-50 dark:bg-gray-900"
          placeholder="Enter your City"
          value={city}
          onChange={handleChange}
          required
        />
        <button className="p-2 mx-36 md:mx-2 rounded-lg bg-blue-500 hover:opacity-90 text-white dark:bg-gray-700">
          SEARCH
        </button>
        {error && (
          <p className="text-red-600 font-semibold font-serif text-3xl max-w-screen-2xl py-28 text-center dark:bg-gray-900">
            Data Not Found :(
          </p>
        )}
      </form>
    </div>
  );
};

export default SearchBox;
