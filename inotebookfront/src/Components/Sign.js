import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'

export default function Sign(props) {
    const form = useRef();
    const [otp, setOTP] = useState({ otpc: "00000000", otpVal: "", times: 0, t: 1 })
    const [cfnotp, setcfn] = useState("")
    const [crediantial, setCrediantial] = useState({ name: "", username: "", email: "", password: "" });

    const navigate = useNavigate();
    useEffect(() => {
        if (otp.t) {
            document.getElementById("otp").style.display = "none";
            setOTP({ t: 0 });
        }
    })

    const { name, username, email, password } = crediantial;
    const handlerSubmit = async (e) => {
        try {
            e.preventDefault()
            if (String(cfnotp) === otp.otpVal) {
                props.showAlert("success", "Verification Successfull")
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
                } else {
                    props.showAlert('danger', 'Sorry a user with email is already exists')
                }
            } else {
                setOTP({ times: otp.times + 1 })
                if (otp.times === 3) {
                    props.showAlert("danger", "Invalid OTP,try again")
                    navigate("/")
                    document.getElementById("sgnup-btn").style.display = "flex";
                    document.getElementById("sgnup").style.display = "flex";
                    document.getElementById("otp").style.display = "none";
                    setCrediantial({ name: "", username: "", email: "", password: "" });
                } else {
                    props.showAlert("danger", "Sorry, Try again")
                }
            }

        } catch (error) {
            props.showAlert('danger', 'Invalid Information')
            console.error(error)
        }
    }

    const inputTaking = (e) => {
        e.preventDefault()
        let check = false
        if (name && username && email && password) {
            check = true;
        } else {
            check = false;
            props.showAlert("warning", "Please fill details")
        }
        if (check) {
            let ot = Math.floor(Math.random() * (8999998) + 1000000);
            setOTP({ otpc: ot });
            setcfn(ot);
            setTimeout(() => {
                emailjs.sendForm("service_sbuml2r", "template_7ydauhg", form.current, "zlMgfRrKWZfPdVHv8").then((result) => {
                    console.log("Message sent!")
                    props.showAlert("success", "OTP send Successfully")
                }, (error) => {
                    console.log(error.text);
                    console.log("Error sending message, try again!")
                    props.showAlert("danger", "OTP send failed")
                });
                document.getElementById("sgnup-btn").style.display = "none";
                document.getElementById("sgnup").style.display = "none";
                document.getElementById("otp").style.display = "block";
            }, 400);
        }
    }

    const checkName = () => {
        if (String(name).match(/[^a-z]/gi) !== null) {
            setCrediantial({ name: String(name).slice(0, String(name).length - 1) })
        }
    }
    const onChange = (e) => {
        setCrediantial({ ...crediantial, [e.target.name]: e.target.value })
    }
    const onOTP = (e) => {
        setOTP({ otpVal: e.target.value });
    }
    return (
        <>
            <div className="df loginPart">
                <div className="df login signup" id="signup">
                    <div className="df topsgnheading">
                        <h1 className="wlm">WELCOME, <span className="mainlgnHeading">bmNoteBook</span></h1>
                        <h1 className="lgn rgs">Registeration</h1>
                        <form ref={form}>
                            <div className="df inp sgn-inp">
                                <div className="df inp sgn-inp" id='sgnup'>
                                    <div className="df user">
                                        <label htmlFor="name">Enter Name</label>
                                        <input type="text" required minLength="3" onKeyUp={checkName} id="name" value={name} onChange={onChange} name='name' className="userinp sgn-userinp"
                                            placeholder="Enter name" />
                                    </div>
                                    <div className="df user">
                                        <label htmlFor="username"><abbr style={{ textDecoration: "none", cursor: "default" }} title="Username must be greater the 5 characters with alphanumeric Combination">Enter Username</abbr></label>
                                        <input type="text" required minLength="3" id="username" value={username} onChange={onChange} name='username'
                                            className="userinp sgn-userinp" placeholder="Enter Username" />
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
                                <div className="df user">
                                    <div className="otp" id="otp">
                                        <input type="text" hidden name="otp" value={otp.otpc} readOnly />
                                        <label htmlFor="inputPassword5" className="form-label">OTP Verification</label>
                                        <input type="password" required maxLength={7} onChange={onOTP} value={otp.otpVal} name='otpVal' placeholder='Enter OTP' title='OTP Send Your Email Id' id="inputPassword5" className="userinp sgn-userinp" />
                                        <div className="df lgnbtn-pry sgn-btn mt-5">
                                            <button type="submit" className="lgnbtn" onClick={handlerSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="df lgnbtn-pry sgn-btn" id='sgnup-btn'>
                                    <button onClick={inputTaking} disabled={String(username).length < 5 || String(password).length < 8} type="submit" className="lgnbtn">Submit</button>
                                </div>
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
                            multiple categories are also available that store notes.</p>
                        <div className="df lgnbtn-pry">
                            <Link to='/login'><button className="lgnbtn" type="button" >Login</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
