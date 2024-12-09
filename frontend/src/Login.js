import {useContext,useState} from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import UserContext from "./UserProvider"
import ConfigContext from "./ConfigProvider"


export default function Login(){
    const [userName,setUserName] = useState(null)
    const [userPassword,setUserPassword] = useState(null)
    const [error,setError] = useState("")
    const UserProvider = useContext(UserContext)
    const ConfigProvider = useContext(ConfigContext)
    return <Modal show = {UserProvider.getUser() == null}>
        <Modal.Header>
            <Modal.Title>{ConfigProvider.getLocalisedText("login")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Label>{error}</Form.Label>  
              <Form.Label>{ConfigProvider.getLocalisedText("userName")}</Form.Label>  
              <Form.Control type = "text" onChange = {e => setUserName(e.target.value)}/>
              <Form.Label>{ConfigProvider.getLocalisedText("userPassword")}</Form.Label>  
              <Form.Control type = "password" onChange = {e => setUserPassword(e.target.value)}/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant = "primary" onClick = { _ =>{
                if(userName != null && userPassword != null){
                    const promise = UserProvider.login(userName,userPassword)
                    promise.then(status => setError(status?"":ConfigProvider.getText("loginError")))
                    .catch(e =>{
                        throw e
                    })
                }
            }}>{ConfigProvider.getLocalisedText("login")}</Button>
        </Modal.Footer>
    </Modal>
}