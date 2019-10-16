import React, { useState } from "react";

const TeamForm = props => {
  const [member, setMember] = useState({
    name: "",
    age: "",
    email: "",
    role: "",
    location: ""
  });
  const changeHandler = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", age: "", email: "", role: "", location: "" });
  };

  return (
    <form onSubmit={submitForm} >
      <label htmlFor="name">Team Member:</label>
      <input name="name" id="name" type="text" placeholder="Full Name" onChange={changeHandler}/>
      <br />
      <label htmlFor="age">Age:</label>
      <input name="age" id="age" type="number" placeholder="Age" onChange={changeHandler}/>
      <br />
      <label htmlFor="email">Email:</label>
      <input name="email" id="email" type="text" placeholder="Email" onChange={changeHandler}/>
      <br />
      <label htmlFor="role">Role:</label>
      <input name="role" id="role" type="text" placeholder="Role" onChange={changeHandler}/>
      <br />
      <label htmlFor="location">Location:</label>
      <input name="location" id="location" type="text" placeholder="Location" onChange={changeHandler}/>
      <br />
      <button type="submit" name="name" id="name">
        Add New Member
      </button>
    </form>
  );
};

export default TeamForm;
