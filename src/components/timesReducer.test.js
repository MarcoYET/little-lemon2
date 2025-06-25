// src/components/timesReducer.test.js

import { initializeTimes, updateTimes } from "./timesReducer";

test("initializeTimes returns default time slots", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same default times regardless of date", () => {
  const action = { type: "update", date: "2025-06-30" };
  const updated = updateTimes([], action);
  expect(updated).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});
