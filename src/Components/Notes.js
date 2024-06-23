import React, { useContext, useEffect, useState, useRef } from 'react'
import noteContext from '../Context/Notes/noteContext';
import NotesItem from './NotesItem';
import { useNavigate } from 'react-router-dom';

export default function Notes() {
    const navigate = useNavigate()
    const context = useContext(noteContext);
    const { notes, getNotes, updateNote, getCustomNote } = context;
    useEffect(() => {
        if (sessionStorage.getItem("authtoken")) {
            // eslint-disable-next-line
            getNotes()
        }
        else {
            navigate("/login")
        }
    })

    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({ new_id: null, etitle: "", edescription: "", etag: "" })


    const update = (currentNote) => {
        ref.current.click()

        document.getElementById("etitle").disabled = false;
        document.getElementById("edescription").disabled = false;
        document.getElementById("etag").disabled = false;

        setNote({ new_id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
        document.getElementById("staticBackdropLabel").style.display = 'block';
        document.getElementById('modal-footer').style.display = 'flex';
    }

    const show = (currentNote) => {
        ref.current.click();
        document.getElementById("etitle").disabled = true;
        document.getElementById("edescription").disabled = true;
        document.getElementById("etag").disabled = true;

        document.getElementById("modal-footer").style.display = 'none';
        document.getElementById("staticBackdropLabel").style.display = 'none';
        setNote({ new_id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handlerClick = (e) => {
        updateNote(note.new_id, note.etitle, note.edescription, note.etag);
        refClose.current.click()
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            {/* <AddNotes /> */}
            <div className="part2 part" key={"notes"}>
                <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                </button>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" id='modal-content'>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Your Note</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container upd">
                                    <div className="mb-3">
                                        {/* <label htmlFor="etitle" className="form-label">Enter title</label> */}
                                        <input type="text" className="form-control" minLength={3} required value={note.etitle} id="etitle" name='etitle' placeholder="Enter title" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label htmlFor="edescription" className="form-label">Enter Description</label> */}
                                        <textarea className="form-control" minLength={5} required value={note.edescription} id="edescription" name='edescription' rows="4" style={{ resize: 'none' }} onChange={onChange}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        {/* <label htmlFor="etag" className="form-label">Enter Tag</label> */}
                                        <input type="text" className="form-control" required value={note.etag} id="etag" name='etag' placeholder="Enter tag" onChange={onChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-between" id='modal-footer'>
                                <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
                                <button disabled={note.etitle.length < 3 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handlerClick}>Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='df row my-2 bmRow'>
                <h1>Your Notes</h1>
                <div className="df notesBox justify-content-start">
                    {notes.map((note) => {
                        return <NotesItem key={note._id} note={note} update={update} show={show} />
                    })}
                </div>
            </div>
        </>
    )
}
