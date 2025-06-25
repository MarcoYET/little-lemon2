import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { BrowserRouter } from "react-router-dom"; // Required for useNavigate

test("renders the booking form heading", () => {
  render(
    <BrowserRouter>
      <BookingForm
        date=""
        setDate={() => {}}
        time=""
        setTime={() => {}}
        guests={1}
        setGuests={() => {}}
        occasion="Birthday"
        setOccasion={() => {}}
        firstName=""
        setFirstName={() => {}}
        lastName=""
        setLastName={() => {}}
        contact=""
        setContact={() => {}}
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
      />
    </BrowserRouter>
  );

  const labelElement = screen.getByText(/Select Date/i);
  expect(labelElement).toBeInTheDocument();
});
