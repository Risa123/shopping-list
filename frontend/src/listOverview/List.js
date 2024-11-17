import {useState,useContext} from "react"
import {useNavigate} from "react-router-dom"
import Button from "react-bootstrap/Button"
import RemoveDialog from "../RemoveDialog"
import RenameDialog from "../RenameDialog"
import OverviewContext from "./OverviewProvider"

export default function List(props){
    const [showRemove,setShowRemove] = useState(false)
    const [showRename,setShowRename] = useState(false)
    const navigate = useNavigate()
    const OverviewProvider = useContext(OverviewContext)
    return <div>
    <RemoveDialog show = {showRemove} setShow = {setShowRemove} action = {() => OverviewProvider.removeList(props.id)}/>    
    <RenameDialog show = {showRename} setShow = {setShowRename} action = {newName => OverviewProvider.renameList(props.id,newName)}/>
    {props.name}
 <Button variant = "secondary" onClick = {_ => OverviewProvider.setArchived(props.id,true)}>archive</Button>
 <Button variant = "secondary" onClick = {_ => setShowRename(true)}>rename</Button>
 <Button variant = "danger" onClick = {_ => setShowRemove(true)}>remove</Button>
 <Button variant = "primary" onClick = {_ => navigate("/listView?id=" + props.id)}>view</Button>
</div>
}