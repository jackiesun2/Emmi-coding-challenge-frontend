import "./../stylesheets/App.css";
import Ticket from "./Ticket";
import IssueList from "./IssueList";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <IssueList title={"Current Issues"} />
      <IssueList title={"Archived Issues"} />
      <Ticket />
    </div>
  );
}

export default App;
