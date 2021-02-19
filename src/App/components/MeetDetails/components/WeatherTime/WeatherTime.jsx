import { useEffect, useState } from "react";

import HeaderCard from "../HeaderCard";
import { ReactComponent as WeatherImg } from "../../../../../assets/img/weather.svg";
import Spinner from "../../../Spinner";

import styles from "./WeatherTime.module.css";

const WeatherTime = ({ loading, temp, min, max, date }) => {
  return (
    <div className={`${styles.card} card`}>
      <HeaderCard label="Birras necesarias" />
      {loading ? (
        <Spinner />
      ) : (
        <div className="card-content">
          <div className={styles.weather}>
            <div className="title is-5 mr-5">Clima actual</div>
            <WeatherImg width="150px" height="100px" />
          </div>
          <div>Fecha: {date}</div>
          <div>Temperatura {temp}°</div>
          <div>Temperatura máxima {max}°</div>
          <div>Temperatura mínima {min}°</div>
        </div>
      )}
    </div>
  );
};

export default WeatherTime;
