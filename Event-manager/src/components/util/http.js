import { QueryClient } from "@tanstack/react-query";
export const client = new QueryClient();
export async function fetchEvents({ signal, searchTerm }) {
  let url = "http://localhost:3000/events";
  if (searchTerm) {
    url += "?search=" + searchTerm;
  }
  const response = await fetch(url, { signal: signal });
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const { events } = await response.json();

  return events;
}
export async function createNewEvent(newEvent) {
  const res = await fetch("http://localhost:3000/events", {
    method: "POST",
    body: JSON.stringify(newEvent),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    const err = new Error("cant post data");
    err.code = res.status;
    err.info = await res.json();
    throw err;
  }
  const { event } = await res.json();
  return event;
}

export async function fetchImages({ signal }) {
  const res = await fetch("http://localhost:3000/events/images", {
    signal: signal,
  });
  if (!res.ok) {
    const err = new Error("can't fetch images");
    err.code = res.status;
    err.info = await res.json();
    throw err;
  }

  const { images } = await res.json();
  return images;
}

export async function fetchEvent({ id, signal }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    signal,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}

export async function deleteEvent({ id }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const error = new Error("An error occurred while deleting the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}
