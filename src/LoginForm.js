import React, {useState} from "react";

export default function LoginForm({onSubmit}) {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted! :)');
    onSubmit(values.username, values.password);
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const isEnabled = values.username.length > 0 && values.password.length > 0;
  
	return (<div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">
          Username
        </label>
        <input type="text"
          name="username"
          placeholder="Enter your username"
          id="username-input"
          value={values.username}
          onChange={handleChange}/>
      </div>
      <div >
        <label htmlFor="password">
          Password
        </label>
        <input type="password"
          name="password" 
          placeholder="Enter your password" 
          id="password-input" 
          value={values.password} 
          onChange={handleChange}/>
      </div>
      <button type="submit" id="login-button" disabled={!isEnabled} >
        Submit 
      </button>
    </form>
  </div>);
}
