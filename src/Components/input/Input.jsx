import { useState } from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";

const Input = ({ handleWeather }) => {
  const [city, setCity] = useState("");
  return (
    <div>
      <input
        type="text"
        className={styles.input}
        placeholder="Type City Name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button className={styles.button} onClick={() => handleWeather(city)}>
        Search
      </button>
    </div>
  );
};

export default Input;

Input.propTypes = {
  handleWeather: PropTypes.func.isRequired,
};
