import {useState,useContext} from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import OverviewContext from "./OverviewProvider"
import UserContext from "../UserProvider"
import ConfigContext from "../ConfigProvider"


export default function CreateList(props){
  const [name,setName] = useState(null)
  const OverviewProvider = useContext(OverviewContext)
  const UserProvider = useContext(UserContext)
  const ConfigProvider = useContext(ConfigContext)
  return <Modal show = {props.show}>
    <Modal.Header>
        <Modal.Title>{ConfigProvider.getLocalisedText("createList")}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Form.Label>{ConfigProvider.getLocalisedText("name")}</Form.Label>
            <Form.Control type = "text" onChange = {e => setName(e.target.value)}/>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant = "primary" onClick = {_ =>{
             if(name != null){
               OverviewProvider.createList(name,UserProvider.getUser())
               props.setShow(false)
             }
        }}>{ConfigProvider.getLocalisedText("create")}</Button>
        <Button variant = "secondary" onClick = {_ => props.setShow(false)}>{ConfigProvider.getLocalisedText("chancel")}</Button>
    </Modal.Footer>
  </Modal>
}