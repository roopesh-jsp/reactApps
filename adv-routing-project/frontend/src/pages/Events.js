import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventsList from "../components/EventsList";
import EventItem from "../components/EventItem";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch("http://localhost:8080/events");

  //     if (!response.ok) {
  //       setError("Fetching events failed.");
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvents(resData.events);
  //     }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);
  const data = useLoaderData();

  return (
    <>
      <h1>Events page</h1>
      <EventsList events={data.events} />
    </>
  );
}

export default EventsPage;
