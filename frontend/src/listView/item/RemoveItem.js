import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import {useContext} from "react"
import ListContext from "../ListProvider"

export default function RemoveItem(props){
    const ListProvider = useContext(ListContext)
    return <Modal show = {props.show}>
         <Modal.Header>
            <Modal.Title>remove item</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            Do you really want to remove this item ?
         </Modal.Body>
         <Modal.Footer>
            <Button variant = "danger" onClick = {_=>{
                ListProvider.remove(props.id)
                props.setShow(false)
            }}>Ok</Button>
            <Button variant = "secondary" onClick = {_ => props.setShow(false)}>Cancel</Button>
         </Modal.Footer>
    </Modal>
}