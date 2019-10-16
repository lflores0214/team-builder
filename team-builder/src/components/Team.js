import React from "react";

const Team = props => {
  console.log(props);
  return (
    <div className="member-list">
      {props.membersList.map((member, index) => {
        return (
          <div className="member" key={index}>
            <h3>{member.name}</h3>
            <h3>{member.age}</h3>
            <h3>{member.email}</h3>
            <h3>{member.role}</h3>
            <h3>{member.location}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
