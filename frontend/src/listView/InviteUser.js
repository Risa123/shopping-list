import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {useContext,useState} from "react"
import UserContext from "../UserProvider"
import ListContext from "./ListProvider"
import ConfigContext from "../ConfigProvider"

export default function InviteUser(props){
    const memberElements = []
    const ListProvider = useContext(ListContext)
    const ConfigProvider = useContext(ConfigContext)
    const [selectedUser,setSelectedUser] = useState(null)
    useContext(UserContext).getAllUsers().then(users =>{
        for(const user of users){
            if(user !== ListProvider.getOwner() && !ListProvider.getMembers().includes(user)){
                memberElements.push(<option>{user}</option>)
            }
        }
    }).catch(e =>{
        throw e
    })
    return <Modal show = {props.show}>
        <Modal.Header>
            <Modal.Title>{ConfigProvider.getLocalisedText("inviteUser")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Select onChange = { e => setSelectedUser(e.target.value)}>
                {memberElements}
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant = "primary" onClick = { _ =>{
                if(selectedUser != null){
                    ListProvider.invite(selectedUser)
                    props.setShow(false)
                }
            }}>{ConfigProvider.getLocalisedText("invite")}</Button>
            <Button variant = "secondary" onClick = {_ => props.setShow(false)}>{ConfigProvider.getLocalisedText("chancel")}</Button>
        </Modal.Footer>
    </Modal>
}