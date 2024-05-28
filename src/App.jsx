import { useState } from "react";
import "./App.css";
import Input from "./Components/input/Input";
import Weather from "./Components/weather/Weather";

function App() {
  const [weather, setWeather] = useState({});
  function handleWeather(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    )
      .then((response) => response.json())
      .then((response) => setWeather(response));
  }
  return (
    <div className="div">
      <h1>Hello to Weather App</h1>
      <Input handleWeather={handleWeather} />
      <Weather weather={weather} />
    </div>
  );
}

export default App;
