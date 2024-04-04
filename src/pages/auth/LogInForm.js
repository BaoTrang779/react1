import { useState } from "react";
import './LogInForm.css';

const axios = require('axios').default;

function LogInForm() {
  const errors = {
    uEmail: "invalid username",
    pass: "invalid password"
  };

  const [email, setEmail ] = useState('');
  const [pass, setPass ] = useState('');

  const handleSubmit = (event) => {
    axios.post("/Login", 
    {
      "email": "email@gmail.com",
      "password": "1"
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email: </label>
          <input type="text" name="uEmail" value={email} onChange={(e) => setEmail(e.value)} required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" value={pass} onChange={(e) => setPass(e.value)} required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <a href="/signup">Don't have an account? Click here to sign up</a>
      </form>
    </div>
  )
}
export default LogInForm;

