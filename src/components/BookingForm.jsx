import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function BookingForm() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally: Store or send data here
    navigate("/confirmation");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>Select Date</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label>Select Time</label>
      <select value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Choose time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label>Guests</label>
      <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" max="10" required />

      <label>Occasion</label>
      <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <label>First Name</label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

      <label>Last Name</label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

      <label>Contact Info</label>
      <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />

      <button type="submit">Confirm Reservation</button>
    </form>
  );
}
