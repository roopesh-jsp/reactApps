import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateEvent, fetchEvent } from "../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { client } from "../util/http.js";
import { useEffect } from "react";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (propsOfMutate) => {
      const dataToUpdate = propsOfMutate.event;
      await client.cancelQueries(["events", params.id]);
      const oldData = client.getQueryData(["events", params.id]);
      client.setQueryData(["events", params.id], dataToUpdate);
      return { oldData };
    },
    onError: (error, data, context) => {
      client.setQueryData(["events", params.id], context.oldData);
    },
    onSettled: () => {
      client.invalidateQueries(["events", params.id]);
    },
  });
  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    setTimeout(() => {
      navigate(`/events/${params.id}`);
    }, 1);
  }

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
        <button type="submit" className="button" onClick={handleSubmit}>
          Update
        </button>
      </EventForm>
    );
  }
  return <Modal onClose={handleClose}>{content}</Modal>;
}
