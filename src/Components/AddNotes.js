import React, { useContext, useState } from 'react'
import noteContext from '../Context/Notes/noteContext'
import Alert from './Alert';

export default function AddNotes() {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "General" });

    const [alert, setAlert] = useState(null)
    const addData = (e) => {
        e.preventDefault();
        if (note.title.length < 3 || note.description.length < 5) {
            setTimeout(() => {
                setAlert(null);
            }, 4000);
            setAlert(true);
        } else {
            addNote(note.title, note.description, note.tag);
        }
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
                    <input type="text" className="form-control" id="title" name='title' placeholder="Enter title" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="description" name='description' rows="4" style={{ resize: 'none' }} onChange={onChange}></textarea>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="tag" name='tag' placeholder="Enter tag" value={note.tag} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={addData}>Add Note</button>
            </div>
        </>
    )
}
