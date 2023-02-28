import React from 'react'
import {ReactComponent as Add} from '../assets/add.svg'
import {
    useNavigate,
  BrowserRouter,
  useParams,
  Link
} from "react-router-dom";
const AddButton =() => {
    return (

        <Link to ="/note/new" className="floating-button">
            <Add/>
        </Link>



    )



}
export default AddButton