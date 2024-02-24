// import React, { useContext, useState } from 'react'
// import noteContext from '../Context/Notes/noteContext'

// export default function TestWork() {
//     const context = useContext(noteContext)
//     const { addNote } = context;
//     const [note, setNote] = useState({ title: '', description: '', tag: "General" })

//     const clickAndAdd = (e) => {
//          e.preventDefault();
//         addNote(note.title, note.description, note.tag);
//     }

//     const onChange = (e) => {
//         setNote({ ...note, [e.target.name]: e.target.value })
//     }
//     return (
//         <>
//             <div className="container">
//                 <form>
//                     <div className="mb-3">
//                         <label htmlFor="etitle" className="form-label">Title</label>
//                         <input type="text" className="form-control" id="etitle" name='title' onChange={onChange} aria-describedby="emailHelp" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="edescription" className="form-label">Description</label>
//                         <input type="text" className="form-control" name='description' onChange={onChange} id="edescription" />
//                     </div>
//                     <button type="submit" className="btn btn-primary" onClick={clickAndAdd}>Submit</button>
//                 </form>
//             </div>
//         </>
//     )
// }
