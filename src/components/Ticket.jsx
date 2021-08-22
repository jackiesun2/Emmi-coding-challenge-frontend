import React, { useState } from "react";
import "../stylesheets/Ticket.css";

export default function Ticket(props) {
  return (
    <div id="ticket-container">
      <div class="ticket-column">
        <h5>25/08/2021</h5>
      </div>
      <div class="ticket-column">
        <h5>Fix menu button</h5>
      </div>
      <div class="ticket-column">
        <h5>Fix bugs on menu...</h5>
      </div>
      <div class="ticket-column">
        <button>Archive</button>
        <button>Edit</button>
      </div>
    </div>
  );
}
