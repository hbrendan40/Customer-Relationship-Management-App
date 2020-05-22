import React from 'react';
import './style/NotesList.css';

import { FaTrashAlt , FaEdit} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup'



function NotesList(props){

    
   
    return(
        <div className="listStyle" key={props.prod.note_id}>
            <ListGroup>
                <ListGroup.Item>
                    {props.prod.description}  
                    <span  className= "editButtons" onClick = {() => props.editNotes(props.prod.note_id)} > <FaEdit className="editButton"/> </span>
                    <span className= "trashButtons" onClick = {() => props.deleteNote(props.prod.note_id)} > <FaTrashAlt/> </span>
                </ListGroup.Item>
            </ListGroup>
        </div>

      
    );
}
export default NotesList;