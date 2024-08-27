import React from 'react'

export default function About() {
  const collapsed = () => {
    let cll = document.getElementById("cll")
    if (cll.classList.contains("collapsed")) {
      cll.classList.remove("collapsed")
    } else {
      cll.classList.add("collapsed")
    }
  }

  return (
    <>
      <div className="df container mt-3">
        <div className="accordion newAccordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item bg-dark text-primary">
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <strong>bmNotebook is a React application for managing personal notes on the cloud.</strong> It provides a user-friendly interface for creating and managing notes. The project is built using <code>React and Node.js</code>, and it includes features like user authentication to ensure that only logged-in users can access.
              </div>
            </div>
            <h2 className="accordion-header">
              <button className="accordion-button bg-dark text-primary border border-info collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" id="cll" aria-controls="panelsStayOpen-collapseOne" onClick={collapsed}>
                #WHAT IS THIS!
              </button>
            </h2>

          </div>
          <div className="accordion-item bg-dark text-primary">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed bg-dark text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                #WHY IT IS USE?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong>iNoteBook is a feature-rich, modern web application designed to simplify and elevate your note-taking experience.</strong> It’s built using the MERN (<code>MongoDB, Express, React, Node.js</code>) stack. Here are some key points about iNoteBook: <br />
                <strong>Features:</strong><br />
                <li><strong>User Authentication:</strong> Users can create accounts, log in, and log out securely using JWT authentication.</li>
                <li><strong>Create Notes:</strong> Authenticated users can create new notes with a title and content.</li>
                <li><strong>Read Notes:</strong> Users can view their existing notes easily.</li>
                <li><strong>Update Notes:</strong> Users can edit and update their notes.</li>
                <li><strong>Delete Notes:</strong> Users can delete notes they no longer need.</li>
                <li><strong>Responsive Design:</strong> The app works well on various screen sizes.</li>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark text-primary">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed bg-dark text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                #HOW TO USE IT
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong>Use Processor is very simple : </strong><br />
                <li><strong>Register or Log In: </strong> If you’re a new user, register (signup) for an account. If you’re an existing user, log in with your credentials.</li>
                <li><strong>Create a Note: </strong> Click the <code>“New Note”</code> button to create a new note. Enter a title and content, then click <code>“Save.”</code></li>
                <li><strong>View Notes: </strong> Your notes will be displayed on the main dashboard. Click on a note to view its details.</li>
                <li><strong>Update a Note: </strong> To edit a note, click the <code>“Edit”</code> button on the note’s details page. Make your changes and click <code>“Save.”</code></li>
                <li><strong>Delete a Note: </strong> To delete a note, click the <code>“Delete”</code> button on the note’s details page. Confirm the deletion when prompted.</li>
                <li><strong>Log Out: </strong> Click <code>“Log Out”</code> when you’re finished using the app to securely log out of your account.</li>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark text-primary">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed bg-dark text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                #WHY IT IS IMPORTANT!
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
              <div className="accordion-body">
                <strong>The importance of using bmNotebook.</strong> <br />
                <strong><code>Real life:</code></strong>
                <li>Any time any place access your notes.</li>
                <li>Your notes only you access with security.</li>
                <li>Simple and easy method processor.</li>
                <strong><code>Efficient Note-Taking:</code></strong>
                <li>iNotebook simplifies note-taking by providing a user-friendly interface. Users can easily create, update, and delete notes within their individual accounts1.</li>
                <li>Whether you’re jotting down ideas, keeping track of tasks, or organizing information, iNotebook streamlines the process.</li>
                <strong><code>User Authentication:</code></strong>
                <li>iNotebook includes user authentication using JWT (JSON Web Tokens). Only logged-in users can access and manage their notes1.</li>
                <li>This security feature ensures that personal notes remain private.</li>
                <strong><code>Responsive Design:</code></strong>
                <li>React enables responsive web design. iNotebook adapts well to various screen sizes, making it accessible on desktops, tablets, and mobile devices</li>
                <ol></ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
