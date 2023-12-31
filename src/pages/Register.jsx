import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const [err, setErr] = useState(null);
  

  const handleChange = (e)=>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  // console.log(inputs);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    // console.log(inputs);
    try{
      // const res = await axios.post("/auth/register", inputs);
      // console.log(res);
      await axios.post("https://post-gallery-mdsalim.onrender.com/api/auth/register", inputs);
      navigate("/login");
    } catch(error){
      setErr(error.response.data);
    }
  }

  return (
    <div className="auth">
      <h1>Register</h1>
      <form >
        <input required type="text" placeholder="username" name="username" onChange={handleChange} />
        <input required type="email" placeholder="email" name="email" onChange={handleChange} />
        <input required type="password" placeholder="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>Do you have an account? <Link to="/login" >Login</Link> </span>
      </form>
    </div>
  )
}

export default Register

