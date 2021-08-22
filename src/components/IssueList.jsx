import React, { useState } from "react";
import "../stylesheets/Issuelist.css";

export default function IssueList(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div id="headers">
        <h3>Date</h3>
        <h3>Title</h3>
        <h3>Description</h3>
        <h3>Actions</h3>
      </div>
      <div></div>
    </div>
  );
}
