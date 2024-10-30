import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

export default function InputModal(props){
    return <Modal.Dialog show = {props.show}>
       <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         test
       </Modal.Body>
       <Modal.Footer>
         <Button variant = "secondary" onClick={()=>props.setShow(false)}>Close</Button>
         <Button variant = "primary" onClick = {()=>props.setShow(false)}>Ok</Button>
       </Modal.Footer>
    </Modal.Dialog>
}