import React, { useState } from "react";

//FIXME
const LoginForm = (props: LoginProps) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  return (
    <form
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        if (
          props.name === details.name &&
          props.email === details.email &&
          props.password === details.password
        ) {
          console.log("logged in");
        } else {
          console.log("details do not match");
        }
        console.log("details obj:", details);
      }}
    >
      <div className="form-inner">
        <h2>Login</h2>
        {/*Error*/}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDetails({ ...details, name: e.target.value })
            }
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDetails({ ...details, email: e.target.value })
            }
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
};

type LoginProps = {
  name: string;
  email: string;
  password?: string;
  error: string;
};

export default LoginForm;
