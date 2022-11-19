import React, {useRef} from "react";
import Card from "../ui/Card.js";
import stayes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value
    const enteredImageimage = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const meetupData = {
      title: enteredTitle,
      Image: enteredImageimage,
      address: enteredAddress,
      description: enteredDescription
    }

    props.onAddMeetup(meetupData)
  };

  return (
    <Card>
      <form className={stayes.form} onSubmit={handleSubmit}>
        <div className={stayes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titleInputRef} required />
        </div>
        <div className={stayes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" ref={imageInputRef} required />
        </div>
        <div className={stayes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressInputRef} required />
        </div>
        <div className={stayes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" rows={5} ref={descriptionInputRef} required></textarea>
        </div>
        <div className={stayes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
