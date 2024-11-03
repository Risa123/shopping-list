import {useState,useContext} from "react"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import ListContext from "../ListProvider"

export default function RenameItem(props){
    const [newName,setNewName] = useState(null)
    const ListProvider = useContext(ListContext)
    return <Modal show = {props.show}>
            <Modal.Header>
                <Modal.Title>Rename Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Control type = "text" onChange = {e => setNewName(e.target.value)} required/>
               </Form>
            </Modal.Body>
            <Modal.Footer>
                  <Button variant = "primary" onClick = {_=>{
                      if(newName != null){
                        ListProvider.renameItem(props.id,newName)
                        props.setShow(false)
                      }
                  }}>Ok</Button>
                  <Button variant = "secondary" onClick = {_ => props.setShow(false)}>Cancel</Button>
            </Modal.Footer>
    </Modal>
}