import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {useContext,useState} from "react"
import UserContext from "../UserProvider"
import ListContext from "./ListProvider"

export default function InviteUser(props){
    const memberElements = []
    const ListProvider = useContext(ListContext)
    const [selectedUser,setSelectedUser] = useState(null)
    for(const user of useContext(UserContext).getAllUsers()){
        if(user !== ListProvider.getOwner() && !ListProvider.getMembers().includes(user)){
            memberElements.push(<option>{user}</option>)
        }
    }
    return <Modal show = {props.show}>
        <Modal.Header>
            <Modal.Title>Invite User</Modal.Title>
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
            }}>Invite</Button>
            <Button variant = "secondary" onClick = {_ => props.setShow(false)}>Close</Button>
        </Modal.Footer>
    </Modal>
}