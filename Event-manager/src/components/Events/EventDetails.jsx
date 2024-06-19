import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent } from "../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["events", `${params.id}`],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      navigate("/events");
    },
  });
  function handleDel() {
    mutate({ id });
  }
  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {isLoading && <LoadingIndicator />}
        {isError && (
          <ErrorBlock
            title={"error"}
            message={error.info?.message || "errorr occured"}
          />
        )}
        {data && (
          <>
            {" "}
            <header>
              <h1>{data && data.title}</h1>
              <nav>
                <button onClick={handleDel}>
                  {isPending ? "Deleting" : "Delete"}
                </button>
                <Link to="edit">Edit</Link>
              </nav>
            </header>
            <div id="event-details-content">
              <img src={`http://localhost:3000/${data && data.image}`} alt="" />
              <div id="event-details-info">
                <div>
                  <p id="event-details-location">{data && data.location}</p>
                  <time dateTime={`Todo-DateT$Todo-Time`}>
                    {data.date} @ {data.time}
                  </time>
                </div>
                <p id="event-details-description">{data && data.description}</p>
              </div>
            </div>
          </>
        )}
      </article>
    </>
  );
}
