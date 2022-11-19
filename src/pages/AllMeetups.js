import React, { useState, useEffect } from "react";
import MeetupListt from "../components/meetups/MeetupListt";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://eta-ara-default-rtdb.europe-west1.firebasedatabase.app/meetup.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        const meetups = [];
        for(const key in data) {
          const meetup = {
            id:key,
            ...data[key]
          };
          meetups.push(meetup)
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>AllMeetups</h1>
      <MeetupListt meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;
