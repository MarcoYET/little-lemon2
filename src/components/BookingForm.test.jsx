import { render, screen } from "@testing-library/react"; // 👈 This line was missing
import BookingForm from "./BookingForm";
import { BrowserRouter } from "react-router-dom";


test("date input is required", () => {
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

  const dateInput = screen.getByLabelText(/select date/i);
  expect(dateInput).toBeRequired();
});

test("guests input has min and max values", () => {
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

  const guestsInput = screen.getByLabelText(/guests/i);
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});
