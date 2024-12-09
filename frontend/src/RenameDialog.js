import {useContext,useState} from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import ConfigContext from "./ConfigProvider"

export default function RenameList(props){
  const [newName,setNewName] = useState(null)
  const ConfigProvider = useContext(ConfigContext)
  return <Modal show = {props.show}>
    <Modal.Header>
        <Modal.Title>{ConfigProvider.getLocalisedText("rename")}</Modal.Title>
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
        }}>{ConfigProvider.getLocalisedText("rename")}</Button>
        <Button variant = "secondary" onClick = {_ => props.setShow(false)}>{ConfigProvider.getLocalisedText("chancel")}</Button>
    </Modal.Footer>
  </Modal>
}