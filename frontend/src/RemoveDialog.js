import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import {useContext} from "react"
import ConfigContext from "./ConfigProvider"

export default function RemoveList(props){
    const ConfigProvider = useContext(ConfigContext)
    return <Modal show = {props.show}>
        <Modal.Header>
            <Modal.Title>{ConfigProvider.getLocalisedText("remove")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {ConfigProvider.getLocalisedText("confirm")}
        </Modal.Body>
        <Modal.Footer>
            <Button variant = "danger" onClick = { _ =>{
                props.action()
                props.setShow(false)
            }}>Ok</Button>
            <Button variant = "secondary" onClick = { _ => props.setShow(false)}>{ConfigProvider.getLocalisedText("chancel")}</Button>
        </Modal.Footer>
    </Modal>
}