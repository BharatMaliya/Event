import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/results-title";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const FilteredEvents = () => {
  const router = useRouter();
  const dateFilter = {
    year: +router.query.slug[0],
    month: +router.query.slug[1],
  };

  console.log(dateFilter);

  if (!dateFilter) {
    return <p className="center">Loading...</p>;
  }
  if (
    isNaN(dateFilter.year) ||
    isNaN(dateFilter.month) ||
    dateFilter.year > 2030
  ) {
    return (
      <ErrorAlert>
        <p>invalid data</p>
      </ErrorAlert>
    );
  }
  const events = getFilteredEvents(dateFilter);
  console.log(events);

  if (!events.length) {
    return (
      <ErrorAlert>
        <p className="center">No Events</p>
      </ErrorAlert>
    );
  }
  const date = new Date(dateFilter.year, dateFilter.month - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </Fragment>
  );
};

export default FilteredEvents;
