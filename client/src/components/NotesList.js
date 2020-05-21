import React from 'react';
import './style/NotesList.css';

import { FaTrashAlt , FaEdit} from "react-icons/fa";



function NotesList(props){

    
   
    return(
        <div className="listStyle" key={props.prod.note_id}>

            {/* Description */}
            {props.prod.description}  

            <span  className= "editButtons" onClick = {() => props.editNotes(props.prod.note_id)} > <FaEdit className="editButton"/> </span>
            {/* Trash Button */}
            <span className= "trashButtons" onClick = {() => props.deleteNote(props.prod.note_id)} > <FaTrashAlt/> </span>
    
        </div>

      
    );
}
export default NotesList;