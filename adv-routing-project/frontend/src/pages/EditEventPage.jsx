import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm.js";
export default function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <h1>Edit event page</h1>
      <EventForm event={data.event} />
    </>
  );
}
