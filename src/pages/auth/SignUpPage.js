import { useState } from "react";
function SignUpPage() {
  const [email, setEmail ] = useState('');
  const [pass, setPass ] = useState('');
  const [accountName, setAccountName ] = useState('');
  const [role, setRole ] = useState('');
  function handleSubmit(){

  }

    return (
      <div className="form">
      <form onSubmit={handleSubmit}>


        <div className="input-container">
          <label>Email: </label>
          <input type="text" name="uEmail" value={email} onChange={(e) => setEmail(e.value)} required />
        </div>

        <div className="input-container">
          <label>Account Name: </label>
          <input type="text" name="uAccountName" value={email} onChange={(e) => setAccountName(e.value)} required />
        </div>

        <div className="input-container">
          <label>Password: </label>
          <input type="password" name="pass" value={pass} onChange={(e) => setPass(e.value)} required />
        </div>


        <div className="input-container">
          <label>Role: </label>
          <input type="text" name="uRole" value={email} onChange={(e) => setRole(e.value)} required />
        </div>
        
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
    );
  }
  
  export default SignUpPage;