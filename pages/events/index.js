import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const AllEventsPage = () => {
  const rounter = useRouter();
  const events = getAllEvents();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    rounter.push(fullPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
