import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

export default function RemoveList(props){
    return <Modal show = {props.show}>
        <Modal.Header>
            <Modal.Title>Remove</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure ?
        </Modal.Body>
        <Modal.Footer>
            <Button variant = "danger" onClick = { _ =>{
                props.action()
                props.setShow(false)
            }}>Ok</Button>
            <Button variant = "secondary" onClick = { _ => props.setShow(false)}>Cancel</Button>
        </Modal.Footer>
    </Modal>
}