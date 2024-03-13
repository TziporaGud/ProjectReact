import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./userSlice";
import './Login.css'
import { useState } from "react";
import { login } from "./userApi";
//npm install styled-components

const Login = () => {
  let { register, handleSubmit ,errors } = useForm();
  let dispatch = useDispatch();
  const [click, setClick] = useState(false);
  
  const save = (data) => {
    login(data)
      .then((res) => {
        alert("Logged in ");
        dispatch(setCurrentUser(res.data));
      })
      .catch((err) => {
        alert("שגיאה", err.response);
        console.log(err.response);
      });
  };
  
  const handleClick = () => setClick(!click);

  return ( <>
    

    <form onSubmit={handleSubmit(save)} className={`form ${click ? "clicked" : ""}`}>
      <label>שם</label>
      <input {...register("name")} type="text" />
      <label>סיסמא</label>
      <input  {...register("password") } type="password"/>
      <button type="submit">Submit</button>
    </form>
  </>
  );
};


export default Login;


