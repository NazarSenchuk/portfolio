import React, {useState ,useEffect} from 'react'
import {ReactComponent as Arrowleft} from '../assets/arrow-left.svg'
import {
    useNavigate,
  BrowserRouter,
  useParams,
  Link
} from "react-router-dom";
import ListItem from '../components/ListItem'
const NotePage = ({match,}) => {
     let history = useNavigate();
     let {id}  = useParams();
     let [note,setNote] =  useState()
     useEffect(()=>{
        getNote()
     },[])
      let getNote = async () => {
      if( id !== "new"){
      let response = await fetch(`/api/notes/get/${id}/`)
        let data = await response.json()
        console.log('data:',data)
        setNote(data)}
      }
    let updateNote = async () => {
        fetch(`/api/notes/${id}/update/`, {
        method: "PUT",
        headers: {
        'Content-Type':"application/json"},
        body:JSON.stringify(note)


        })
    }
     let createNote = async () => {
        fetch(`/api/notes/create/`, {
        method: "POST",
        headers: {
        'Content-Type':"application/json"},
        body:JSON.stringify(note)


        })
    }

    let handleSubmit =()=> {
    if(id !=='new'&& note.body== '') {
        deleteNote()

        console.log('delete')
    }else if(id !== 'new'){
        updateNote()
        console.log('update')
   }else if(id ==='new'&& note !== null){
    createNote()
    console.log('create')
    }
    history('/')
    }







    let deleteNote  = async()=>{
        fetch(`/api/notes/${id}/delete/`, {
         method:'DELETE',
         'headers':{
         'Content-Type':'application/json'

         }

        })
    }
     return(
     <div className = "note">
     <div className = "note-header">
     <h3>
        <Link to = "/">
            <Arrowleft onClick = {handleSubmit}/>

        </Link>
     </h3>
     <Link to = "/">

     {id !== 'new' ? (
        <button onClick={deleteNote}>Delete</button>
     ):(
        <button onClick = {handleSubmit}> Done</button>
     )}
     </Link>
     </div>

     <textarea onChange={(e) => { setNote(note => ({ ...note, 'body': e.target.value })) }} value={note?.body}></textarea>
     </div>
)}
export default NotePage