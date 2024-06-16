import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm.js";
export default function NewEventPage() {
  return (
    <>
      <h1>New event page</h1>
      <EventForm />
    </>
  );
}
export async function action({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    data: data.get("date"),
    description: data.get("description"),
  };
  const res = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (!res.ok) {
    throw json({ message: "condnt fetch data" }, { status: 500 });
  }
  return redirect("/events");
}
