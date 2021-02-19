import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { format } from "date-fns";

import { MeetupContext } from "../../MeetupContext";
import MeetDetailsHeader from "./components/MeetDetailsHeader";
import NewMember from "./components/NewMember";
import WeatherTime from "./components/WeatherTime";
import ListMembers from "./components/ListMembers";
import MeetNotFound from "../MeetNotFound";
import { getWeatherFromApi } from "./service";
import { weatherDataNormalizer } from "./normalizer";

const initialState = { name: "", email: "" };
const MeetDetails = () => {
  const [weatherTime, setWeatherTime] = useState({});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialState);
  const { getMeetById, addMemberToMeetup } = useContext(MeetupContext);
  const { id } = useParams();
  const meetDetail = getMeetById(id);

  useEffect(() => {
    getWeatherTime();
  }, []);

  if (!meetDetail) {
    return <MeetNotFound />;
  }

  const getWeatherTime = async () => {
    try {
      setLoading(true);
      const data = await getWeatherFromApi();
      const normalizerData = weatherDataNormalizer(data);
      setWeatherTime(normalizerData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addMemberToMeetup({ name: data.name, email: data.email, id: id });
    setData(initialState);
  };

  const dayWeather = weatherTime[meetDetail.date] || {};
  console.log(dayWeather);

  return (
    <div>
      <MeetDetailsHeader theme={meetDetail.theme} title={meetDetail.title} />
      <div className="columns p-5 ">
        <div className="column">
          <NewMember
            label="Nuevo participante"
            onSubmit={handleOnSubmit}
            onChange={handleOnChange}
            data={data}
          />
          <ListMembers
            label="Lista de participantes"
            members={meetDetail.members}
          />
        </div>
        <div className="column">
          <WeatherTime
            temp={dayWeather?.temp}
            min={dayWeather?.min}
            max={dayWeather?.max}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default MeetDetails;
