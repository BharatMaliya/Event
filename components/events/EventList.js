import React from "react";
import EventItem from "./EventItem";
import styles from "./EventList.module.css";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
