import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import noteContext from '../Context/Notes/noteContext'

export default function Navbar() {
    let navigate = useNavigate()
    const context = useContext(noteContext)
    const {collapse} = context;
    const logout = ()=>{
        sessionStorage.removeItem("authtoken")
        navigate("/login")
    }
    let location = useLocation();
    React.useEffect(() => { }, [location])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark myNavbar">
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id='btn-collapse'>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" onClick={collapse}>
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item" onClick={collapse}>
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item" onClick={collapse}>
                                <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                            </li>
                        </ul>
                        {!sessionStorage.getItem("authtoken")?
                        // <form className="d-flex" role="search">
                        //     <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        //     <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
                        // </form>
                        ""
                        : <button className="btn btn-primary" onClick={logout}>Logout</button> }
                    </div>
                </div>
            </nav>
        </>
    )
}
