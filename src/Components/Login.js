import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
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
            // setCrediantial({ username: "", password: "" });
            if (json.success) {
                navigate("/")
            }
        } catch (error) {
            console.error(error)
        }
    }

    const onChange = (e) => {
        setCrediantial({ ...crediantial, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container mt-4">
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
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
