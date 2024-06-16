import { useParams, useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
export default function EventDetail() {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export async function loader({ req, params }) {
  const id = params.eventId;
  const res = await fetch("http://localhost:8080/events/" + id);
  return res;
}
