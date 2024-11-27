import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {useContext,useState} from "react"
import ListContext from "./ListProvider"
import ConfigContext from "../ConfigProvider"

export default function InputModal(props){
    const ListProvider = useContext(ListContext)
    const [itemName,setItemName] = useState(null)
    const ConfigProvider = useContext(ConfigContext)
    return <Modal show = {props.show}>
      <Modal.Header>
          <Modal.Title>{ConfigProvider.getText("addItem")}</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <Form>
          <Form.Label>{props.textName}</Form.Label>
          <Form.Control type = "text" required onChange = {e => setItemName(e.target.value)}/>
         </Form>
       </Modal.Body>
       <Modal.Footer>
         <Button variant = "primary" onClick = {_ =>{
            if(itemName != null){
              ListProvider.addItem(itemName)
              props.setShow(false)
            }
         }}>Ok</Button>
           <Button variant = "secondary" onClick={_ => props.setShow(false)}>Close</Button>
       </Modal.Footer>
    </Modal>
}