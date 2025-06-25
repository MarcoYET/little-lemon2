// src/pages/BookingPage.jsx
import React from "react";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";

export default function BookingPage(props) {
  const {
    date,
    availableTimes
  } = props;
    const displayDate = date ? new Date(date).toLocaleDateString() : "Selected Day";


  return (
    <>
      <section className="booking-hero">
        <h1 className="heading-xl">Reserve a Table</h1>
        <p className="subheading">
          Plan your visit at Little Lemon — we can't wait to host you!
        </p>
      </section>

      <main className="booking-main">
        <BookingForm {...props} />
      </main>

      {/* ✅ Display available booking times in a table */}
      <section className="available-times">
        <h2>Available Times for {displayDate}</h2>

        <table>
          <thead>
            <tr>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {availableTimes && availableTimes.length > 0 ? (
              availableTimes.map((time, index) => (
                <tr key={index}>
                  <td>{time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No times available</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      <Testimonials />

      <section className="booking-image-spacer">
        <img
          src="/Mario and Adrian A.jpg"
          alt="Mario and Adrian in the kitchen"
          className="spacer-img"
        />
        <img
          src="/Mario and Adrian b.jpg"
          alt="Mario and Adrian smiling"
          className="spacer-img"
        />
      </section>
    </>
  );
}
