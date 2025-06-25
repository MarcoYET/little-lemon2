// confirmation.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <main className="confirmation-page">
      <h1 className="heading-xl">Reservation Confirmed</h1>
      <p className="confirmation-text">
        Thank you, Marco!
        <br />
        Your table is reserved.
        <br />
        <br />
        A confirmation has been sent to your email.
      </p>
      <button onClick={() => navigate("/")} className="btn">
        Return to Home
      </button>
    </main>
  );
}
