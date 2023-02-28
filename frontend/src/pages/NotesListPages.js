import React, {useState,useEffect} from 'react'
import {ReactComponent as Add} from '../assets/add.svg'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'
import {
    useNavigate,
  BrowserRouter,
  useParams,
  Link
} from "react-router-dom";
const NotesListPage = () => {
    let [notes,setNotes] = useState([])
    useEffect(() => {
        getNotes()
    }, [])
    let getNotes = async () => {

        let response = await fetch('api/notes/')
        let data = await response.json()
        console.log('data:',data)
        setNotes(data)
    }
    console.log(notes)
    return (
        <div className = "notes">
        <div className = "notes-header">

            <div>
                <h2 className= "notes-title"> &#9782;Notes </h2>
                <p className = "notes-count" > {notes.length} </p>
            </div>

        </div>
        <div className = "notes-list">
        <h2> NOTELIST </h2>
        {notes.map((note,index)=>(

        <ListItem key = {index} note= {note}/>))}

        </div>
        <AddButton />
        </div>
    )
}
export default NotesListPage