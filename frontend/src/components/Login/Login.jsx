import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Success!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div class="container">
      <div class="wrapper">
        <div class="title"><span>Login Form</span></div>
        <form onSubmit={handleSubmit}>

          <div class="row">
            <i class="fas fa-user"></i>
            <input 
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Phone" />
          </div>

          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" 
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div class="pass">Forgot password?</div>
          <div class="row button">
            <input type="submit" value="Login" />
          </div>
          <div class="signup-link">Not a member? <Link to="/sign-up">Signup now</Link></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
