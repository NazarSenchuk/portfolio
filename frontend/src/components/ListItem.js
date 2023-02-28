import React from 'react'
import {
  BrowserRouter,

  Link,
} from "react-router-dom";
let getTime=(note)=>{
    let time = note.created

    return time.slice(0,10)
}
let getTitle=(note)=>{
    let title = note.body.split('\n')[0]
    if (title.length > 45){

        return title.slice(0,45)
    }
    return title
}
const ListItem = ({note} ) =>{


    return (

    <Link to={`/note/${note.id}`}>

    <div className = "notes-list-item">
    <h3>{getTitle(note)}</h3>
    <p>{getTime(note)}</p>
    </div>

    </Link>




    )





}
export default ListItem