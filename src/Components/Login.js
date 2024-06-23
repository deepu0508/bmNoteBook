import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login(props) {
    const [crediantial, setCrediantial] = useState({ username: "", password: "" })
    let navigate = useNavigate()
    const handlerForm = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:6700/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username: crediantial.username, password: crediantial.password })
            })

            let json = await response.json()
            if (json.success) {
                console.log(json.authToken)
                sessionStorage.setItem("authtoken", json.authToken)
                props.showAlert('success', 'Logged in Successfully')
                navigate("/");
            } else {
                props.showAlert('danger', 'Invalid User')
            }
        } catch (error) {
            props.showAlert('danger', 'Invalid User')
            // console.error(error)
        }
    }

    const onChange = (e) => {
        setCrediantial({ ...crediantial, [e.target.name]: e.target.value })
    }
    return (
        <>
            {/* <div className="container mt-4">
                <h1 className="text-center">Login</h1>
                <form onSubmit={handlerForm}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" onChange={onChange} value={crediantial.username} required name='username' aria-describedby="usernameHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={onChange} value={crediantial.password} required name='password' id="password" />
                    </div>
                    <button disabled={crediantial.username.length < 1 || crediantial.password.length < 1} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div> */}

            <div className="df loginPart">
                <div className="df loginImg" id="loginImg">
                    <img src="" alt="" />
                    <div className="df lgnhead">
                        <h1 className="lgnHeading">WELCOME TO YOUR <span className="mainlgnHeading">bmNoteBook</span></h1>
                        <p className="sub-lgnHeading">For your notes store with securly.</p>
                    </div>
                    <p className="content">bmNoteBook is best Digital Online NoteBook which store your notes with securly.And
                        multiple categories are also available that store notes according by your notes.</p>
                    <div className="df lgnbtn-pry">
                        <Link to='/signup'><button className="lgnbtn" type="button">SignUp</button></Link>
                    </div>
                </div>
                <div className="df login" id="login">
                    <div className="df form">
                        <div className="df hello">
                            <h1>Hello!</h1>
                        </div>
                        <h1 className="lgn">Login</h1>
                        <form onSubmit={handlerForm} className='bmForm'>
                            <div className="df inp">
                                <div className="df user">
                                    <label htmlFor="username">Enter Username</label>
                                    <input type="text" required minLength="3" id="username" onChange={onChange} value={crediantial.username} name='username' className="userinp" placeholder="Enter username" />
                                </div>
                                <div className="df user">
                                    <label htmlFor="password">Enter Password</label>
                                    <input type="password" required minLength="8" onChange={onChange} value={crediantial.password} name='password' id="password" className="userinp" placeholder="Enter password" />
                                </div>
                                <div className="forgot"><a href="#">Forgot username and password</a></div>
                            </div>
                            <div className="lgnbtn-pry cls-btn ">
                                <button disabled={crediantial.username.length < 1 || crediantial.password.length < 1} type="submit" className="lgnbtn">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
