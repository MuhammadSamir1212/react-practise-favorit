import React from "react";
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  let navigate = useNavigate()
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://eta-ara-default-rtdb.europe-west1.firebasedatabase.app/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    ).then(() => {
      navigate('/')
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
