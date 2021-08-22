import React, { useState } from "react";
import "../stylesheets/Ticket.css";

export default function Ticket(props) {
  const initialState = props.userDaily || {
    title: "",
    description: "",
    open: false,
  };
  const [issue, setIssue] = useState(initialState);

  return (
    <div id="ticket-container">
      <div class="ticket-column">
        <h5>date: {props.issue.date}</h5>
      </div>
      <div class="ticket-column">
        <h5>title: {props.issue.title}</h5>
      </div>
      <div class="ticket-column">
        <h5>description: {props.issue.description}</h5>
      </div>
      <div class="ticket-column">
        <button>Archive</button>
        <button>Edit</button>
      </div>
    </div>
  );
}
