import React, { useState } from "react";
import "./registration.css";

function Registration() {
  const [formfield01, setformfield01] = useState("");
  const [formfield02, setformfield02] = useState("");
  const [formfield03, setformfield03] = useState("");
  const [formfield04, setformfield04] = useState("");

  function clearForm() {
    setformfield01("");
    setformfield02("");
    setformfield03("");
    setformfield04("");
  }

  function handleAddData() {
    if (!formfield01 || !formfield02 || !formfield03 || !formfield04) {
      alert("All fields are required!");
      return;
    }

    const RegFormData = {
      name: formfield01,
      pass: formfield02,
      mail: formfield03,
      phone: formfield04,
      disabled: true,
    };

    fetch(`http://localhost:8000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(RegFormData),
    }).then(() => {
      console.log("new user registered");
    });

    clearForm();
  }

  return (
    <>
      <div className="box">
        <div>
          <div>Username</div>
          <input
            placeholder="name"
            name="username"
            onChange={(event) => setformfield01(event.target.value)}
            value={formfield01}
          />
        </div>
        <div>
          <div>Password</div>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(event) => setformfield02(event.target.value)}
            value={formfield02}
          ></input>
        </div>
        <div>
          <div>Email</div>
          <input
            placeholder="email"
            name="email"
            onChange={(event) => setformfield03(event.target.value)}
            value={formfield03}
          ></input>
        </div>
        <div>
          <div>Mobile</div>
          <input
            placeholder="mobile"
            name="mobile"
            onChange={(event) => setformfield04(event.target.value)}
            value={formfield04}
          ></input>
        </div>
        <div className="btn btn-primary" onClick={handleAddData}>
          Register
        </div>
        <div className="btn btn-secondary" onClick={clearForm}>
          cancel
        </div>
      </div>
    </>
  );
}

export default Registration;
