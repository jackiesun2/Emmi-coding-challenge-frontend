import "./../stylesheets/App.css";
import IssueList from "./IssueList";
import FormDialog from "./TicketForm";

function App() {
  return (
    <div className="App">
      <h1>Issue Tracker App</h1>
      <FormDialog />
      <IssueList title={"Current Issues"} />
      {/* <IssueList title={"Archived Issues"} /> */}
    </div>
  );
}

export default App;
