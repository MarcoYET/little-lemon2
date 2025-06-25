import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function BookingForm({
  date, setDate,
  time, setTime,
  guests, setGuests,
  occasion, setOccasion,
  firstName, setFirstName,
  lastName, setLastName,
  contact, setContact,
  availableTimes, dispatch
}) {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  // ✅ Real-time form validation logic
  useEffect(() => {
    const isValid =
      date &&
      time &&
      guests > 0 &&
      firstName.trim() &&
      lastName.trim() &&
      contact.trim();
    setIsFormValid(isValid);
  }, [date, time, guests, firstName, lastName, contact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
      firstName,
      lastName,
      contact,
    };

    // Save booking to localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const updatedBookings = [...existingBookings, formData];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    navigate("/confirmation");
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "update", date: selectedDate });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Table reservation form">
      <label htmlFor="res-date">Select Date</label>
      <input
        id="res-date"
        type="date"
        value={date}
        onChange={handleDateChange}
        required
        aria-required="true"
      />

      <label htmlFor="res-time">Select Time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-required="true"
      >
        <option value="">Choose time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Guests</label>
      <input
        id="guests"
        type="number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="10"
        required
        aria-required="true"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-required="true"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <label htmlFor="first-name">First Name</label>
      <input
        id="first-name"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="last-name">Last Name</label>
      <input
        id="last-name"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="contact">Contact Info</label>
      <input
        id="contact"
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
        aria-required="true"
      />

      <button type="submit" disabled={!isFormValid}>Confirm Reservation</button>
    </form>
  );
}
