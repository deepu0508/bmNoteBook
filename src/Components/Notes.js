import React, { useContext, useEffect, useState, useRef } from 'react'
import noteContext from '../Context/Notes/noteContext';
import NotesItem from './NotesItem';
import AddNotes from './AddNotes';

export default function Notes() {

    const context = useContext(noteContext);
    const { notes, getNotes, updateNote } = context;
    useEffect(() => {
        // eslint-disable-next-line
        getNotes()
    })

    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({ new_id: null, etitle: "", edescription: "", etag: "" })


    const update = (currentNote) => {
        ref.current.click()
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
            <AddNotes />
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Your Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Enter title</label>
                                    <input type="text" className="form-control" value={note.etitle} id="etitle" name='etitle' placeholder="Enter title" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Example textarea</label>
                                    <textarea className="form-control" value={note.edescription} id="edescription" name='edescription' rows="4" style={{ resize: 'none' }} onChange={onChange}></textarea>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" value={note.etag} id="etag" name='etag' placeholder="Enter tag" onChange={onChange} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handlerClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-2'>
                <h1>Your Notes</h1>
                {notes.map((note) => {
                    return <NotesItem key={note._id} note={note} update={update} />
                })}
            </div>
        </>
    )
}
