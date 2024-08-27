import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
    const host = 'http://localhost:6700'
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);

    // Get Notes
    const getNotes = async () => {
        // API call
        try {
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                    'auth-token': sessionStorage.getItem("authtoken")
                }
            })
            const data = await response.json();
            setNotes(data)

        } catch (error) {
            console.error(error)
        }
    }

    // Custom Notes Fetch
    const getCustomNote = async (tag) => {
        try {
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": sessionStorage.getItem("authtoken")
                }
            })
            const data = await response.json();
            setNotes([])
            console.log(notes)
            for (let i in data) {
                if (data[i].tag === tag) {
                    setNotes(notes.concat(data))
                }
            }
            console.log(notes);
        } catch (error) {

        }
    }

    // Add new note
    const addNote = async (title, description, tag) => {
        // API call
        try {
            let response = await fetch(`${host}/api/notes/addnote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": sessionStorage.getItem("authtoken")
                },
                body: JSON.stringify({ title, description, tag })
            })

            // Add new Note
            const note = await response.json()
            setNotes(notes.concat(note));
        } catch (error) {
            console.error(error)
        }
    }
    // Delete Note
    const deleteNote = async (id) => {
        // API call
        try {
            const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': "application/json",
                    "auth-token": sessionStorage.getItem("authtoken")
                }
            })
            await response.json()
            // delete note
            const newNote = notes.filter((note) => { return note._id !== id })
            setNotes(newNote);
        } catch (error) {
            console.error(error)
        }
    }
    // Edit Note
    const updateNote = async (id, title, description, tag) => {
        // API call
        try {
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': sessionStorage.getItem("authtoken")
                },
                body: JSON.stringify({ title, description, tag })
            })

            const data = await response.json()
            console.log(data)

            let newNotes = JSON.parse(JSON.stringify(notes))
            // Update Note
            for (let index = 0; index < notes.length; index++) {
                const element = notes[index];
                if (element._id === id) {
                    newNotes[index].title = title;
                    newNotes[index].description = description;
                    newNotes[index].tag = tag;
                    break;
                }
            }
            setNotes(newNotes);
        } catch (error) {
            console.error(error)
        }
    }

    const collapse = async () => {
        let icon = document.getElementById("btn-collapse");
        let content = document.getElementById("navbarSupportedContent");

        if (!icon.classList.contains("collapsed")) {
            icon.classList.add("collapsed")
            content.classList.remove("show")
        }
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote, getNotes, collapse, getCustomNote }} >
            {props.children}
        </NoteContext.Provider >
    )
}

export default NoteState;