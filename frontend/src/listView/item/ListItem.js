import Button from "react-bootstrap/Button"
import {useState,useContext} from "react"
import RemoveItem from "./RemoveItem"
import ListContext from "../ListProvider"
import RenameItem from "./RenameItem"

export default function ListItem(props){
    const [showRemove,setShowRemove] = useState(false)
    const [showRename,setShowRename] = useState(false)
    const ListProvider = useContext(ListContext)
    return <div>
    {props.name}
    <RemoveItem show = {showRemove} setShow = {setShowRemove} id = {props.id}/>
    <RenameItem show = {showRename} setShow = {setShowRename} id = {props.id}/>
    <Button variant = "secondary" onClick = {_ => ListProvider.setArchived(props.id,true)}>archive</Button>
    <Button variant = "secondary" onClick = { _ => setShowRename(true)}>rename</Button>
    <Button variant = "danger" onClick = {_ => setShowRemove(true)}>remove</Button>
  </div>
}