import { React, useState } from "react";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


const Singup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newForm = {
      name,
      email,
      password,
    }

    axios
      .post(`${server}/user/create-user`, newForm)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>Registration Form</span></div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <i className="fas fa-user"></i>
            <input 
               type="text"
               name="text"
               autoComplete="name"
               required
               value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder="Full Name"
           />
          </div>

          <div className="row">
            <i className="fas fa-user"></i>
            <input 
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Phone" />
          </div>

          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" 
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div className="pass">Forgot password?</div>
          <div className="row button">
            <input type="submit" value="REgister" />
          </div>
          <div className="signup-link">Already a member? <Link to="/login">Login now</Link></div>
        </form>
      </div>
    </div>
  );
};

export default Singup;


