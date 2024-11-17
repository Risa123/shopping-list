import Button from "react-bootstrap/Button"
import {useState,useContext} from "react"
import RemoveDialog from "../RemoveDialog"
import ListContext from "./ListProvider"
import RenameDialog from "../RenameDialog"

export default function ListItem(props){
    const [showRemove,setShowRemove] = useState(false)
    const [showRename,setShowRename] = useState(false)
    const ListProvider = useContext(ListContext)
    return <div>
    {props.name}
    <RemoveDialog show = {showRemove} setShow = {setShowRemove} action = {() => ListProvider.remove(props.id)}/>
    <RenameDialog show = {showRename} setShow = {setShowRename} action = {newName => ListProvider.renameList(props.id,newName)}/>
    <Button variant = "secondary" onClick = {_ => ListProvider.setArchived(props.id,true)}>archive</Button>
    <Button variant = "secondary" onClick = { _ => setShowRename(true)}>rename</Button>
    <Button variant = "danger" onClick = {_ => setShowRemove(true)}>remove</Button>
  </div>
}