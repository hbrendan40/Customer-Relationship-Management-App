import React,{Component} from 'react';
import NotesList from './NotesList';
//import './style/Notes.css'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Notes extends Component {
    state = {
        //array of products object (id, name, price)
        allNotes: [],

        //empty product object. Wait for user to fill in new product
        newNote: {
            description: ''
        }
    }

    componentDidMount(){
        this.getNotes()
    }

    getNotes = _ => {
        fetch('http://localhost:4000/notes')
        .then(response => response.json())
        .then(response => this.setState({allNotes: response.data}))
        .catch(err => console.log(err))
    }

    addNote = _ => {
        const{newNote} = this.state;
        fetch(`http://localhost:4000/notes/add?description=${newNote.description}`)
          .then(response => response.json)
          .then(this.getNotes)
          .catch(err => console.error(err))
    }

    deleteNote = id => {
        console.log(id);
        //delete product where product_id = id
    }
    


    
    //renderProduct = ({product_id, name, price}) => <div key={product_id}>{name} {price}</div>


    

    render(){
        const {allNotes, newNote} = this.state;

        const noteslist = allNotes.map(prod => <NotesList key={allNotes.note_id} prod={prod} deleteNote={this.deleteNote}/>)
        
    return (
      <div>
          
          <Container className="jumbotron">

          <h1>Notes</h1>
              <Row>

              <Col>
              
                
                  

                {noteslist}
                </Col>
                

               
        
          <Col>

        
          <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Note</Form.Label>
    <Form.Control type="note" value={newNote.description} onChange={e => this.setState({newNote: {...newNote, description: e.target.value}})} placeholder="Write down your notes" />
  </Form.Group>
  </Form>
     


         
    
        
        <Button onClick={this.addNote}>Add Note </Button>

        </Col>
       
        </Row>
        </Container>

    
    </div>

    );
  }
}
  
  export default Notes;
  