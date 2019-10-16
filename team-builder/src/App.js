import React, { useState } from "react";
import Team from "./components/Team";
import TeamForm from "./components/TeamForm";
import "./App.css";
import data from "./data";

function App() {
  const [members, setMembers] = useState(data);
  const addNewMember = member => {
    setMembers([...members, member]);
  };
  return (
    <div className="App">
      <TeamForm addNewMember={addNewMember} />
      <Team membersList={members} />
    </div>
  );
}

export default App;
