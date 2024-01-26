import React, { useState } from "react";
import "./style.css";

import email_Icon from "./Assets/Email.png";
import password_Icon from "./Assets/Password.png";
import phone_Icon from "./Assets/phone.png";
import user_Icon from "./Assets/User.png";

function Basicsignup() {
  const [userRegi, setUserRegi] = useState({
    username: "",
    emailId: "",
    phoneNo: "",
    password: "",
  });

  const [record, setRecord] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegi({ ...userRegi, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    const newRecord = { ...userRegi, id: new Date().getTime.toString() };
    setRecord([...record, newRecord]);
    console.log(record);

    setUserRegi({ username: "", emailId: "", phoneNo: "", Password: "" });
    
  };

  return (
    <>
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      <form action="" onSubmit={handleSubmit}>
        <div className="input">
          <img src={user_Icon} alt=""/>
          <label htmlFor="username"></label>
          <input
            type="text"
            placeholder="FullName"
            autoComplete="off"
            value={userRegi.username}
            onChange={handleInput}
            name="username"
            id="username" />
        </div>
        <div className="input">
          <img src={email_Icon} alt=""/>
          <label htmlFor="emailId"></label>
          <input
            type="text"
            placeholder="EmailId"
            autoComplete="off"
            value={userRegi.emailId}
            onChange={handleInput}
            name="emailId"
            id="emailId" />
        </div>
        <div className="input">
          <img src={phone_Icon} alt=""/>
          <label htmlFor="phoneNo"></label>
          <input
            type="text"
            placeholder="PhoneNo"
            autoComplete="off"
            value={userRegi.phoneNo}
            onChange={handleInput}
            name="phoneNo"
            id="phoneNo" />
        </div>
        <div className="input">
          <img src={password_Icon} alt=""/>
          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={userRegi.password}
            onChange={handleInput}
            name="password"
            id="password" />
        </div>
        <div className="submit-container">
        <button className="submit">Registration</button>
        </div>
      </form>
      </div>
</div>
      <div className="showData">
        <table width="100%" border={1} cellPadding={10}>
          <tbody>
            <tr className="dataStyle">
              <td>FullName</td>
              <td>EmailId</td>
              <td>Password</td>
              <td>PhoneNo</td>
            </tr>
        {record.map((curElem) => {
          return (
            <tr key={curElem.id}>
              <td>{curElem.username}</td>
              <td>{curElem.emailId}</td>
              <td>{curElem.password}</td>
              <td>{curElem.phoneNo}</td>
            </tr>
          );
        })}
        </tbody>
        </table>
      </div>
    </>
  );
}

export default Basicsignup;
