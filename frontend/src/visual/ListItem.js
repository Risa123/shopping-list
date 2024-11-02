import Button from "react-bootstrap/Button"
import {useState,useContext} from "react"
import RemoveItem from "./RemoveItem"
import ListContext from "../nonVisual/ListContext"

export default function ListItem(props){
    const [showRemove,setShowRemove] = useState(false)
    const ListProvider = useContext(ListContext)
    return <div>
    {props.name}
    <RemoveItem show = {showRemove} setShow = {setShowRemove} id = {props.id}/> 
    <Button variant = "secondary" onClick = {_=>ListProvider.setArchived(props.id,true)}>archive</Button>
    <Button variant = "secondary">rename</Button>
    <Button variant = "danger" onClick = {_=>setShowRemove(true)}>remove</Button>
  </div>
}