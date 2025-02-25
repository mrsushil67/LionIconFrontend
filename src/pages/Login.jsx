import axios from "axios";
import React, { useState } from "react";
import config from "../config/config";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
   
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    if(token){
        return <Navigate to="/" />;
     }
    const handleSubmit = async() => {
        try {
             console.log(email,password)
             const payload={
                email:email,
                password:password
             }
             setEmail("")
             setPassword("")
             const {data} =await axios.post(`${config.host}${config.login.url}`,payload)
             if(data.status === true){
                localStorage.setItem("name",data.data.name)
                localStorage.setItem("token",data.data.token)
             }else{
                alert(data.message)
             }
             console.log(data)
           
        } catch (error) {
            console.log(error.response.data);
            alert(error.response.data.message)
            
        }
    }

    const handleChange = (e) => {
        // console.log(e.target)
        const {name,value} = e.target
        if(name == "email"){
            setEmail(value)
        }else if(name == "password"){
            setPassword(value)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-purple-500">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
                <img
                    src="images/logo.png"
                    alt="Logo"
                    className="mx-auto mb-3 w-40"
                />
                <div className="flex items-center mt-4">
                    <hr className="flex-grow border-gray-300" />
                    <b className="mx-2 text-sm text-gray-900">Welcome</b>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <p className="text-gray-600 mb-4">Sign in to Continue</p>
                <input
                    type="text"
                    value={email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter User Name"
                    className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    value={password}
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="flex justify-between items-center mb-4 text-sm">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-1" />
                        Remember Me
                    </label>
                    <a href="#" className="text-blue-500">Forgot Password?</a>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={handleSubmit}>
                    Sign in
                </button>
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-sm text-gray-500">Want to make an agent?</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <button className="w-full border border-red-500 text-red-500 py-2 rounded hover:bg-red-500 hover:text-white">
                    Create Request
                </button>
            </div>
        </div>
    );
};

export default Login;
