import Modal from "react-bootstrap/Modal"

export default function InputModal(props){
    return <Modal show = {props.show} onHide = {()=>props.setShow(false)}>
       <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         test
       </Modal.Body>
    </Modal>
}