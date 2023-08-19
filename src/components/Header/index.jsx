import React from "react";

const Header = ({ navList }) => {
  console.log(navList);
  return (
    <div>
      <h1>ini header</h1>
      {navList.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default Header;
