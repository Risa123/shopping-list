import {useState,useContext} from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import OverviewContext from "./OverviewProvider"


export default function CreateList(props){
  const [name,setName] = useState(null)
  const OverviewProvider = useContext(OverviewContext)
  return <Modal show = {props.show}>
    <Modal.Header>
        <Modal.Title>Create List</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Form.Label>Name</Form.Label>
            <Form.Control type = "text" onChange = {e => setName(e.target.value)}/>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant = "primary" onClick = {_ =>{
             if(name != null){
               OverviewProvider.createList(name)
               props.setShow(false)
             }
        }}>Create</Button>
        <Button variant = "secondary" onClick = {_ => props.setShow(false)}>Close</Button>
    </Modal.Footer>
  </Modal>
}