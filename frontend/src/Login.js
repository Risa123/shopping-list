import {useContext,useState} from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import UserContext from "./UserProvider"


export default function Login(){
    const [userName,setUserName] = useState(null)
    const UserProvider = useContext(UserContext)
    return <Modal show = {UserProvider.getUser() == null}>
        <Modal.Header>
            <Modal.Title>login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Control type = "text" onChange = {e => setUserName(e.target.value)}/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant =  "primary" onClick = { _ =>{
                UserProvider.login(userName)
            }}>login</Button>
        </Modal.Footer>
    </Modal>
}