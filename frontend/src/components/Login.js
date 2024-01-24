import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {loginSuccess} from "../redux/actions/authActions";

const Login = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/login',{username,password})
            .then(response => {
                dispatch(loginSuccess({username:'helloamir'}))
                alert("Sign in Successfully!")
                navigate('/')
            })
            .catch(error =>
            {
                if(error.response.status === 500){
                    alert("Server Error, Try Again Later!")
                }
                else if(error.response.status === 404){
                    alert("User Not Found!")
                 }
                else if(error.response.status === 401) {
                    alert("Incorrect Username Or Password!")
                }
                else{
                    alert("Unknown Error Occurred!")
                }
            })
    }

    return (
        <div className="bg-gray-300 min-h-screen">
            <div className="px-3 relative top-10 bg-white max-w-md mx-auto py-5 space-y-4 shadow-md rounded-md text-center">
                <h2 className="text-2xl mb-4 font-bold">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-md font-semibold mb-2 text-gray-600">Username:</label>
                        <input
                            className="py-2  w-full border border-gray-300 rounded-md text-center focus:outline-none focus:border-blue-500"
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-md font-semibold mb-2 text-gray-600">Password:</label>
                        <input
                            className="py-2 w-full border border-gray-300 rounded-md text-center focus:outline-none focus:border-blue-500"
                            type="text"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="w-full bg-blue-500 text-white py-2 rounded-md h" onClick={handleLogin}>
                        Login
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Login;