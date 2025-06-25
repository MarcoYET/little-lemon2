// src/components/BookingLogic.jsx
import React, { useReducer, useState } from "react";
import BookingPage from "../BookingPage"; // adjust if path is different

const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00"];

const updateTimes = (state, action) => {
  if (action.type === "update") {
    return initializeTimes(); // could be dynamic in the future
  }
  return state;
};

export default function BookingLogic() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");

  return (
    <BookingPage
      date={date} setDate={setDate}
      time={time} setTime={setTime}
      guests={guests} setGuests={setGuests}
      occasion={occasion} setOccasion={setOccasion}
      firstName={firstName} setFirstName={setFirstName}
      lastName={lastName} setLastName={setLastName}
      contact={contact} setContact={setContact}
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );
}
