import React, { useState } from 'react'
import './login.css'
import { use } from 'react'
const Login = ({ handleLogin }) => {
    // console.log({handleLogin})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submithandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('')
    }
    return (
        <>
            <div className="d-flex flex-column justify-center items-center border-double border-2 vh-100 m-1">
                <h1 className="loginh1 fs-1 font-bold ">Login page</h1>
                <form className="loginform flex flex-col justify-center items-center text-center border-double border-2 m-2 py-5  bg-gray-500 " onSubmit={(e) => {
                    submithandler(e)
                    setEmail("");
                    setPassword("");

                }}>

                    <div className=" d-flex form-group">
                        <input name="Email" required className="form-control rounded-full p-2 border-double border-2 m-1 px-5" type="Emali" placeholder='Enter your email' value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    </div>
                    <div className="form-group">
                        <label className="form-lable"></label>
                        <input required name="password" className="form-control rounded-full p-2 border-double border-2 m-1 px-5 " type="Password" placeholder='Enter your password' value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    </div>
                    <button className="my-3 btn btn-primary w-25">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login
