import {useState} from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"

export default function RenameList(props){
  const [newName,setNewName] = useState(null)
  return <Modal show = {props.show}>
    <Modal.Header>
        <Modal.Title>Rename</Modal.Title>
    </Modal.Header>
    <Modal.Body>
       <Form>
          <Form.Control type = "text" onChange = {e => setNewName(e.target.value)}/>
       </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant = "primary" onClick = {_ =>{
          if(newName != null){
             props.action(newName)
             props.setShow(false)
          }
        }}>Rename</Button>
        <Button variant = "secondary" onClick = {_ => props.setShow(false)}>Cancel</Button>
    </Modal.Footer>
  </Modal>
}