import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  HomePage,
  UpdateUser,
} from "./routes/Routes.js";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Store from "./redux/store";
import { getAllUser } from "./redux/actions/user";


const App = () => {
  
  Store.dispatch(getAllUser());
  
  // useEffect(() => {
  //   Store.dispatch(getAllUser());
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
     
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
     
    </BrowserRouter>
  );
};

export default App;
