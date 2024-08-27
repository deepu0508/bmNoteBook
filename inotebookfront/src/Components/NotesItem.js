import React, { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext';
import view from "../Img/view.png"

export default function NotesItem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context
    const { note, update, show } = props
    return (
        <div className='col-md-3'>
            <div className="card my-2">
                <div className="card-body bmCard">
                    <div className="d-flex align-item-center">
                        <h5 className="card-title flex-grow-1">{String(note.title).length < 7 ? note.title : String(note.title).slice(0, 6)}</h5>
                        <img src={view} alt="view" className='miniImg' onClick={() => show(note)} />
                        <box-icon type='solid' className='my-1' name='trash' onClick={() => { deleteNote(note._id) }} ></box-icon>
                        <box-icon type='solid' className='my-1' name='edit' onClick={() => { update(note) }}></box-icon>
                    </div>
                    <p className="card-text">{String(note.description).length < 15 ? note.description : String(note.description).slice(0, 15)}..</p>
                </div>
            </div>
        </div>
    )
}
