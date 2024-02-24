import React, { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext';

export default function NotesItem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context
    const { note, update } = props
    return (
        <div className='col-md-3'>
            <div className="card my-2">
                <div className="card-body">
                    <div className="d-flex align-item-center">
                        <h5 className="card-title flex-grow-1">{note.title}</h5>
                        <box-icon type='solid' className='my-1' name='trash' onClick={() => { deleteNote(note._id) }} ></box-icon>
                        <box-icon type='solid' className='my-1' name='edit' onClick={() => { update(note) }}></box-icon>
                    </div>
                    <p className="card-text">{String(note.description).length < 20 ? note.description : note.description.slice(0, 20)}..</p>
                </div>
            </div>
        </div>
    )
}
