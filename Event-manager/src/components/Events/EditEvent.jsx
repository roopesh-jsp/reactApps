import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchEvent } from "../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
  function handleSubmit(formData) {}

  function handleClose() {
    navigate("../");
  }
  let content = (
    <>
      <p>loading... wait</p>
      <LoadingIndicator />
    </>
  );
  if (isError) {
    content = (
      <>
        <ErrorBlock
          title={"failed to load the data"}
          message={error.info?.message || "pls try to fill all data"}
        />
        <button>
          <Link to="../"> okay</Link>
        </button>
      </>
    );
  }
  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }
  return <Modal onClose={handleClose}>{content}</Modal>;
}
