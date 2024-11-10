import {useState,useContext} from "react"
import {useNavigate} from "react-router-dom"
import Button from "react-bootstrap/Button"
import RemoveList from "./RemoveList"
import RenameList from "./RenameList"
import OverviewContext from "./OverviewProvider"

export default function List(props){
    const [showRemove,setShowRemove] = useState(false)
    const [showRename,setShowRename] = useState(false)
    const navigate = useNavigate()
    const OverviewProvider = useContext(OverviewContext)
    return <div>
    <RemoveList show = {showRemove} setShow = {setShowRemove} id = {props.id}/>    
    <RenameList show = {showRename} setShow = {setShowRename} id = {props.id}/>
    {props.name}
 <Button variant = "secondary" onClick = {_ => OverviewProvider.setArchived(props.id,true)}>archive</Button>
 <Button variant = "secondary" onClick = {_ => setShowRename(true)}>rename</Button>
 <Button variant = "danger" onClick = {_ => setShowRemove(true)}>remove</Button>
 <Button variant = "primary" onClick = {_ => navigate("/listView")}>view</Button>
</div>
}