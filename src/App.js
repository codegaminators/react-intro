import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import CardComp from "./components/CardComp";

const App = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userData);
    setUsers([...users, userData]);
  };

  return (
    <div className="container">
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>

        <button className="btn btn-primary btn-block rounded-0">Submit</button>
      </form>
      {users.map((user, i) => (
        <CardComp name={user.name} email={user.email} />
      ))}
    </div>
  );
};

export default App;

const CardComp = ({ name, email }) => {
  return (
    <div style={myStyle}>
      <p>Name: {name}</p>
      <p>Email: {email} </p>
    </div>
  );
};

const myStyle = {
  boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
  minHeight: "10vh",
  display: "flex",
  padding: "1rem 1.5rem",
  flexDirection: "column",
  margin: "1rem 0",
};
