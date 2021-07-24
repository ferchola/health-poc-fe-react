import React, { useState, useCallback } from "react";
import "./App.css";
import "./components/auth/Registration";
import Navbar from "./components/Navbar";
import "@fontsource/roboto";
import WelcomeCard from "./components/WelcomeCard";
import Login from "./components/auth/Login";

export const App = () => {
  // const adminUser = {
  //   name: "fer",
  //   email: "fer@fer.com",
  //   password: "admin123",
  // };

  // const [user, setUser] = useState({ name: "", email: "" });
  // const [error, setError] = useState("");

  // const Login = (details: LoginDetails) => {
  //   console.log(details);
  // };

  // const Logout = () => {
  //   console.log("Logout");
  // };

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = useCallback(() => {
    setShowLogin(true);
  }, []);

  return (
    <div className="App">
      <Navbar onLoginClick={() => handleLoginClick()} />
      <WelcomeCard isLoginVisible={showLogin} />
      <Login isLoginVisible={showLogin} />
    </div>
  );
};

export default App;
