import {useContext,useState} from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import ListContext from "./ListProvider"
import ConfigContext from "../ConfigProvider"

export default function KickMember(props){
    const ListProvider = useContext(ListContext)
    const [selectedUser,setSelectedUser] = useState(null)
    const ConfigProvider = useContext(ConfigContext)
    return <Modal show = {props.show}>
          <Modal.Header>
            <Modal.Title>{ConfigProvider.getLocalisedText("kickMember")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Select onChange={ e => setSelectedUser(e.target.value)}>
                {ListProvider.getMembers().map(member => <option>{member}</option>)}
              </Form.Select>
            </Form>
          </Modal.Body>
          <Modal.Footer>
             <Button variant = "primary" onClick = { _ =>{
                if(selectedUser != null){
                    ListProvider.kick(selectedUser)
                    props.setShow(false)
                }
             }}>{ConfigProvider.getLocalisedText("kick")}</Button>
             <Button variant = "secondary" onClick = {_ => props.setShow(false)}>{ConfigProvider.getLocalisedText("chancel")}</Button>
          </Modal.Footer>
    </Modal>
}