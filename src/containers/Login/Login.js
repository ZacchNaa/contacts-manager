import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/auth/register">Register</Link>
    </div>
  );
}

export default Login;
