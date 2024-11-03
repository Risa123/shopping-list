import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {useContext,useState} from "react"
import ListContext from "./ListProvider"

export default function RenameList(props){
    const [newName,setNewName] = useState(null)
    const ListProvider = useContext(ListContext)
    return <Modal show = {props.show}>
        <Modal.Header>
            <Modal.Title>Rename List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form>
             <Form.Control type = "text" required onChange = {e => setNewName(e.target.value)}/>
           </Form>
        </Modal.Body>
        <Modal.Footer>
           <Button variant = "primary" onClick= {_=>{
               if(newName != null){
                ListProvider.rename(newName)
                props.setShow(false)
              }
           }}>Ok</Button>
           <Button variant = "secondary" onClick = {_ => props.setShow(false)}>Close</Button>
        </Modal.Footer>
    </Modal>
}