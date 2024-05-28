import PropTypes from "prop-types";
import styles from "./Weather.module.css";
const Weather = ({ weather }) => {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurdsay",
    "Friday",
    "Saturday",
  ];
  const images = {
    Clouds: "https://cdn-icons-png.flaticon.com/512/252/252035.png",
    Thunderstorm: "https://cdn-icons-png.freepik.com/512/6635/6635551.png",
    Clear:
      "https://static-00.iconduck.com/assets.00/sun-symbol-emoji-2048x2048-wityey4r.png",
    Rain: "https://cdn-icons-png.freepik.com/512/4150/4150897.png",
    Mist: "https://cdn-icons-png.freepik.com/512/10630/10630000.png",
    Wind: "https://cdn-icons-png.freepik.com/512/2011/2011448.png",
    Humidity:
      "https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png",
  };

  const city = weather.main ? weather.name : null;
  const temp = weather.main ? Math.round(weather.main.temp - 273) : null;
  const main = weather.weather ? weather.weather[0].main : null;
  const windSpeed = weather.wind ? weather.wind.speed : null;
  const humidity = weather.main ? weather.main.humidity : null;
  const date = new Date();
  const weekDate = week[date.getDay()];
  return (
    <>
      {main ? <img src={images[main]} alt="" className={styles.img} /> : null}
      <p className={styles.h2}>{city ? `${city}, ${weekDate}` : null}</p>
      <h1>{temp ? `${temp}°C` : null}</h1>
      {city ? (
        <div className={styles.bottom}>
          <div className={styles.windDiv}>
            {main ? (
              <img src={images.Humidity} alt="" className={styles.wind} />
            ) : null}
            <div>
              <p className={styles.windText}>{humidity}%</p>
              <p className={styles.windText}>Humidity</p>
            </div>
          </div>
          <div className={styles.windDiv}>
            {main ? (
              <img src={images.Wind} alt="" className={styles.wind} />
            ) : null}
            <div>
              <p className={styles.windText}>{windSpeed}</p>
              <p className={styles.windText}>Wind Speed</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Weather;

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
};
