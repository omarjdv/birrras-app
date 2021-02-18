import { createContext, useState, useEffect } from "react";
import { node } from "prop-types";
import cuid from "cuid";

export const MeetupContext = createContext();

const MeetupContextProvider = ({ children }) => {
  const [meetups, setMeetups] = useState(() => {
    const meetupString = localStorage.getItem("meetups");
    if (meetupString) {
      const meetups = JSON.parse(meetupString);
      if (meetups) return meetups;
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem("meetups", JSON.stringify(meetups));
  }, [meetups]);

  const addMeetup = ({ title, theme, maxMembers, date }) => {
    const id = cuid();
    const members = [];
    setMeetups((meetups) => ({
      ...meetups,
      [id]: { title, theme, maxMembers, date, id, members },
    }));
    return id;
  };

  const addMemberToMeetup = ({ id, name, email }) => {
    const newMeetups = {
      ...meetups,
      [id]: {
        ...meetups[id],
        members: [...meetups[id].members, { name, email }],
      },
    };
    setMeetups(newMeetups);
  };

  const getMeetById = (id) => {
    return meetups[id];
  };
  return (
    <MeetupContext.Provider
      value={{
        list: Object.values(meetups),
        getMeetById,
        addMeetup,
        addMemberToMeetup,
      }}
    >
      {children}
    </MeetupContext.Provider>
  );
};

MeetupContextProvider.propTypes = {
  children: node,
};

export default MeetupContextProvider;
