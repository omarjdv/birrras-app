import { useContext } from "react";
import { number, string } from "prop-types";
import { format } from "date-fns";

import HeaderCard from "../HeaderCard";
import Spinner from "../../../Spinner";
import { WeatherTimeContext } from "../../../../WeatherTimeContext";
import { beerBox } from "./utils";

import styles from "./WeatherTime.module.css";

const WeatherTime = ({ date = "", members }) => {
  const { loading, weatherTime } = useContext(WeatherTimeContext);
  const dayWeather = weatherTime[date] || {};
  const beerBoxes = beerBox(dayWeather.temp, members);
  const temperature = dayWeather?.temp?.toFixed();

  return (
    <div className="card">
      <HeaderCard label="Información de la meetup" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="hero is-primary">
            <div className="hero-body is-flex p-3">
              <div className={styles.infoContent}>
                <div className={styles.circle}>{beerBoxes}</div>
                <div className={styles.info}>Cajas de birras</div>
              </div>
              <div className={styles.infoContent}>
                <div className={styles.circle}>{temperature}°</div>
                <div className={styles.info}>Grados celcius</div>
              </div>
              <div className={styles.infoContent}>
                <div className={styles.circle}>{members}</div>
                <div className={styles.info}>Participantes</div>
              </div>
            </div>
            <div className="pl-3 pr-3 pb-3 has-text-weight-bold has-text-centered">
              Fecha: {format(new Date(date), "dd-MM-yyyy")}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

WeatherTime.propTypes = {
  temp: number,
  min: number,
  max: number,
  date: string,
};

export default WeatherTime;
