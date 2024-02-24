import React, { useContext, useState } from 'react'
import noteContext from '../Context/Notes/noteContext'
import Alert from './Alert';

export default function AddNotes() {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "General" });

    const [alert, setAlert] = useState({ check: null, mess: '' })
    const addData = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setTimeout(() => {
            setAlert({check:null,mess:""})
        }, 3000);
        setAlert({check:true,mess:"Your Note has been added successfully"})
        setNote({ title: "", description: "", tag: "General" });
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container">
                <div className="Warn" style={{ height: '50px' }}>
                    <Alert alert={alert} />
                </div>
                <h1>Add a Note</h1>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter title</label>
                    <input type="text" className="form-control" value={note.title} id="title" minLength={3} required name='title' placeholder="Enter title" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Enter Description</label>
                    <textarea className="form-control" value={note.description} id="description" minLength={5} required name='description' rows="4" style={{ resize: 'none' }} onChange={onChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Enter Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' required placeholder="Enter tag" value={note.tag} onChange={onChange} />
                </div>
                <button type="submit" disabled={note.title.length < 3 || note.description.length < 5} className="btn btn-primary" onClick={addData}>Add Note</button>
            </div>
        </>
    )
}
