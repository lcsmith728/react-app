import { useState } from 'react';

export default function Login() {

  // define object to hold email and password in state
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted")
    console.log('User Email: ' + enteredValues.email);
    console.log('User Password: ' + enteredValues.password);
  }

  // generic input handler to handle input from both inputs
  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event) => handleInputChange('email', event.target.value)} value={enteredValues.email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => handleInputChange('password', event.target.value)} value={enteredValues.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
