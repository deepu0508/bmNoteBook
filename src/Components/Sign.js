import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Sign(props) {
    const [crediantial, setCrediantial] = useState({ name: "", username: "", email: "", password: "" });

    const navigate = useNavigate();

    const { name, username, email, password } = crediantial;
    const handlerSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await fetch('http://localhost:6700/api/auth/createuser', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, username, email, password })
            })

            let json = await response.json()
            console.log(json)
            if (json.success) {
                props.showAlert('success', 'Account created Successfully')
                navigate("/")
            }
        } catch (error) {
            props.showAlert('danger', 'Invalid Information')
            console.error(error)
        }
    }
    const onChange = (e) => {
        setCrediantial({ ...crediantial, [e.target.name]: e.target.value })
    }
    return (
        <>
            {/* <div className="container">
                <h1 className="text-center m-2">Sign-Up</h1>
                <form onSubmit={handlerSubmit}>
                    <div className="mb-3">
                        <label htmlhtmlFor="name" className="form-label">Enter Name</label>
                        <input type="text" className="form-control" required id="name" value={name} onChange={onChange} name='name' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlhtmlFor="username" className="form-label"><abbr style={{ textDecoration: "none", cursor: "default" }} title="Username must be greater the 5 characters with alphanumeric Combination">Enter Username</abbr></label>
                        <input type="text" className="form-control" required id="username" value={username} onChange={onChange} name='username' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlhtmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" required id="email" value={email} onChange={onChange} name='email' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlhtmlFor="password" className="form-label"><abbr style={{ textDecoration: "none", cursor: "default" }} title="Password must be greater the 8 characters">Enter Password</abbr></label>
                        <input type="password" className="form-control" required id="password" value={password} onChange={onChange} name='password' />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                        <label className="form-check-label" htmlhtmlFor="exampleCheck1">Terms and Conditions</label>
                    </div>
                    <button disabled={username.length < 5 || password.length < 8} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div> */}
            <div className="df loginPart">
                <div className="df login signup" id="signup">
                    <div className="df topsgnheading">
                        <h1 className="wlm">WELCOME, <span className="mainlgnHeading">bmNoteBook</span></h1>
                        <h1 className="lgn rgs">Registeration</h1>
                        <form onSubmit={handlerSubmit}>
                            <div className="df inp sgn-inp">
                                <div className="df user">
                                    <label htmlFor="name">Enter Name</label>
                                    <input type="text" required minLength="3" id="name" value={name} onChange={onChange} name='name' className="userinp sgn-userinp"
                                        placeholder="Enter name" />
                                </div>
                                <div className="df user">
                                    <label htmlFor="username"><abbr style={{ textDecoration: "none", cursor: "default" }} title="Username must be greater the 5 characters with alphanumeric Combination">Enter Username</abbr></label>
                                    <input type="text" required minLength="3" id="username" value={username} onChange={onChange} name='username'
                                        className="userinp sgn-userinp" placeholder="Enter email" />
                                </div>
                                <div className="df user">
                                    <label htmlFor="email">Enter email</label>
                                    <input type="email" required minLength="3" id="email" value={email} onChange={onChange} name='email'
                                        className="userinp sgn-userinp" placeholder="Enter email" />
                                </div>
                                <div className="df user">
                                    <label htmlFor="password"><abbr style={{ textDecoration: "none", cursor: "default" }} title="Password must be greater the 8 characters">Enter Password</abbr></label>
                                    <input type="password" required minLength="8" id="password" value={password} onChange={onChange} name='password'
                                        className="userinp sgn-userinp" placeholder="Enter password" />
                                </div>
                            </div>
                            <div className="df lgnbtn-pry sgn-btn">
                                <button disabled={username.length < 5 || password.length < 8} type="submit" className="lgnbtn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="df loginImg signUpImg" id="signupimg">
                    <div className="sgn">
                        <img src="" alt="" />
                        <div className="df lgnhead sgnhead">
                            <h1 className="lgnHeading sgnHeading">WELCOME TO YOUR <span
                                className="mainlgnHeading mainsgnheading">bmNoteBook</span></h1>
                            <p className="sub-lgnHeading">For your notes store with securly.</p>
                        </div>
                        <p className="content">bmNoteBook is best Digital Online NoteBook which store your notes with securly.And
                            multiple categories are also available that store notes according by your notes.</p>
                        <div className="df lgnbtn-pry">
                            <Link to='/login'><button className="lgnbtn" type="button" >Login</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
