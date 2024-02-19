import { React, useState, useEffect } from "react";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";


const UpdateUser = () => {
    const navigate = useNavigate();

  const [data, setData] = useState({});
  const [email, setEmail] = useState(data && data?.email);
  const [name, setName] = useState(data && data?.name);

 const userId = useParams();

useEffect(()=>{
    axios
      .get(`${server}/user/update-user/${userId.id}`)
      .then((res) => {
        setData(res.data.user)
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });

    },[userId.id]);

const updateHandler = async (e) => {
        e.preventDefault();
        
        await axios.put(`${server}/user/update-user/${userId.id}`, {
            name,
            email
        }).then((res) => {
            toast.success("User info updated succesfully!");
            navigate('/')
            window.location.reload(true);
        }).catch((error)=> {
            toast.error(error.response.data.message);
        })
};

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>Edit Form</span></div>
        <form onSubmit={updateHandler}>
          <div className="row">
            <i className="fas fa-user"></i>
            <input 
               type="text"
               name="text"
               autoComplete="name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder={data.name}
           />
          </div>

          <div className="row">
            <i className="fas fa-user"></i>
            <input 
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={data.email} />
          </div>

          <div className="row button">
            <input type="submit" value="Update User" />
          </div>
           </form>
      </div>
    </div>
  );
};

export default UpdateUser;


