import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"

export default function Contact(props) {
  const form = useRef();

  const [user, setUser] = useState({ userName: "", userEmail: "" });
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("subBtn").innerText = "waiting...."
    document.getElementById("subBtn").disabled = true;
    emailjs.sendForm("service_sbuml2r", "template_kuhsa8s", form.current, "zlMgfRrKWZfPdVHv8").then((result) => {
      console.log("Message sent!")
      props.showAlert("success", "Your Queries Send Successfull to admin!")
      reset();
      document.getElementById("FormControlTextarea1").value = ""
      document.getElementById("subBtn").innerText = "Submit"
      document.getElementById("subBtn").disabled = false;
    }, (error) => {
      console.log(error.text);
      console.log("Error sending message, try again!")
    })
  }

  const checkName = () => {
    if (String(user.userName).match(/[^a-z ]/gi) !== null) {
      props.showAlert("warning", "Please Enter Only Alphabet Value")
      setUser({ userName: user.userName.slice(0, user.userName.length - 1) })
    }
  }

  const reset = () => {
    setUser({ userName: "", userEmail: "" });
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-item-center my-4">
        <div className="container contactContainer d-flex flex-column bg-transparent border border-2 shadow-lg rounded-start rounded-end p-4">
          <div className="container p-1 bg-info bg-opacity-10 border border-3 shadow-lg border-info rounded-start rounded-end df">
            <h1 className="contact m-1">CONTACT</h1>
          </div>
          <div className="df my-4 px-3">
            <form ref={form} onSubmit={sendEmail} className="container text-light contactForm">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Enter Name</label>
                <input required value={user.userName} onChange={onChange} onKeyUp={checkName} className="form-control bg-body-tertiary" type="text" placeholder="Enter Name" name='userName' />
                <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Enter Email address</label>
                <input required value={user.userEmail} onChange={onChange} type="email" className="form-control bg-body-tertiary" id="exampleFormControlInput1" name='userEmail'
                  placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Content</label>
                <textarea required title='Minimum 10 Characters are required.' minLength={"10"} className="form-control bg-body-tertiary" id="FormControlTextarea1" rows="5"
                  placeholder="Suggestion,Queries,Comments,Complain" name='message'></textarea>
              </div>
              <div className="container df justify-content-between btn-ctn">
                <button type="reset" className="btn btn-warning" onClick={reset}>Reset</button>
                <button type="submit" id='subBtn' className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
