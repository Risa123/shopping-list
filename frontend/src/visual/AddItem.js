import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {useContext,useState} from "react"
import ListContext from "../nonVisual/ListContext"

export default function InputModal(props){
    const ListProvider = useContext(ListContext)
    const [itemName,setItemName] = useState(null)
    return <Modal show = {props.show}>
      <Form>
      <Modal.Header>
          <Modal.Title>add item</Modal.Title>
       </Modal.Header>
       <Modal.Body>
        <Form.Label>{props.textName}</Form.Label>
         <Form.Control type = "text" required onChange = {e=>setItemName(e.target.value)}/>
       </Modal.Body>
       <Modal.Footer>
         <Button variant = "secondary" onClick={_=>props.setShow(false)}>Close</Button>
         <Button variant = "primary" onClick = {_=>{
            if(itemName != null){
              ListProvider.addItem(itemName)
              props.setShow(false)
            }
         }}>Ok</Button>
       </Modal.Footer>
      </Form>
    </Modal>
}