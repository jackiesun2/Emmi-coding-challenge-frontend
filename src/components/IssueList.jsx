import React, { useState, useEffect } from "react";
import "../stylesheets/Issuelist.css";
import Ticket from "./Ticket";

export default function IssueList(props) {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/ticket")
      .then((res) => res.json())
      .then((result) => {
        setIssues(result);
      });
  }, []);

  return (
    <div id="issues-container">
      <h1>{props.title}</h1>
      <div id="headers">
        <h3>Date</h3>
        <h3>Title</h3>
        <h3>Description</h3>
        <h3>Actions</h3>
      </div>
      <div>
        <ul>
          {issues &&
            issues.map((issue) => (
              <li key={issue.id}>
                <Ticket
                  //   date={issue.date}
                  //   title={issue.title}
                  //   description={issue.description}
                  issue={issue}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
