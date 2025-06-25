import React from "react";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials"; // ✅ Imported

export default function BookingPage() {
  return (
    <>
      {/* Green Hero Section */}
      <section className="booking-hero">
        <h1 className="heading-xl">Reserve a Table</h1>
        <p className="subheading">
          Plan your visit at Little Lemon — we can't wait to host you!
        </p>
      </section>

      {/* Booking Form */}
      <main className="booking-main">
        <BookingForm />
      </main>

      {/* ✅ Testimonials Section */}
      <Testimonials />

      {/* ✅ Image Spacer Section */}
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
