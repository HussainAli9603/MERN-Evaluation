import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { server } from "../server";
import { toast } from "react-toastify";

const HomePage = () => {

  const navigate = useNavigate();

  const { users } = useSelector((state) => state.user);

  const deleteUser = async (id) => {
      await axios
        .delete(`${server}/user/delete-user/${id}`)
        .then((res) => {
          toast.success("Deleted Success!");
          navigate("/");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
  
  };

  return (
    <div className="container">
    <div className="py-4">
      <h1>Home Page</h1>
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index + 1}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  className="btn btn-outline-primary mr-2"
                  to={`/update-user/${user._id}`}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-danger" to=""
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
     
    
   
  )
}

export default HomePage