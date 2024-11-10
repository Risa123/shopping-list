import {useContext} from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import OverviewContext from "./OverviewProvider"

export default function RemoveList(props){
    const OverviewProvider = useContext(OverviewContext)
    return <Modal show = {props.show}>
        <Modal.Header>
            <Modal.Title>Remove List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Do you really want to remove this list ?
        </Modal.Body>
        <Modal.Footer>
            <Button variant = "danger" onClick = {_ =>{
                OverviewProvider.removeList(props.id)
                props.setShow(false)
            }}>Ok</Button>
            <Button variant = "secondary" onClick = {_ => props.setShow(false)}>Cancel</Button>
        </Modal.Footer>
    </Modal>
}