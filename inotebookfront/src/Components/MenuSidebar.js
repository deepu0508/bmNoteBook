import React, { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext'
import { Link } from 'react-router-dom';

export default function MenuSidebar() {
    const context = useContext(noteContext)
    const { notes, getNotes,getCustomNote } = context
    const arr = [];
    notes.map((note) => { arr.push(note.tag) })
    // console.log(arr)

    const newArr = [];

    newArr.push(arr[0]);
    let check = false;

    for (let i in arr) {
        for (let j in newArr) {
            if (newArr[j] == arr[i]) {
                check = false
                break;
            } else {
                check = true
            }
        }
        if (check) {
            newArr.push(arr[i]);
        }
    }
    // console.log(newArr)


    return (
        <>
            <div>
                <div className="list-group">
                    <Link key={'hello'} className='list-group-item list-group-item-action listItem bmList addNote-option' to="/addNote">Add Note</Link>
                    <a href="#" key={'list'} className="list-group-item list-group-item-action listItem bmList">List of Your Notes tag</a>
                    {newArr.map((note) => {
                        return <a href="#" key={note+1} className="list-group-item list-group-item-action listItem" onClick={()=>getCustomNote(note)}>{note}</a>
                    })}
                </div>
            </div>
        </>
    )
}
