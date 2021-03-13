import React from "react";

const CardComp = ({ name, email }) => {
  return (
    <div style={myStyle}>
      <p>Name: {name}</p>
      <p>Email: {email} </p>
    </div>
  );
};

export default CardComp;

const myStyle = {
  boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
  minHeight: "10vh",
  display: "flex",
  padding: "1rem 1.5rem",
  flexDirection: "column",
  margin: "1rem 0",
};

// style={{
//     boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
//     minHeight: "10vh",
//     display: "flex",
//     padding: "1rem 1.5rem",
//     flexDirection: "column",
//     // paddingBottom: "1rem",
//   }}
