import {useState,useContext} from "react"
import {useNavigate} from "react-router-dom"
import Button from "react-bootstrap/Button"
import RemoveDialog from "../RemoveDialog"
import RenameDialog from "../RenameDialog"
import OverviewContext from "./OverviewProvider"
import UserContext from "../UserProvider"
import ConfigContext from "../ConfigProvider"
import Form from "react-bootstrap/Form"

export default function List(props){
    const ConfigProvider = useContext(ConfigContext)
    const [showRemove,setShowRemove] = useState(false)
    const [showRename,setShowRename] = useState(false)
    const navigate = useNavigate()
    const OverviewProvider = useContext(OverviewContext)
    const currentUser = useContext(UserContext).getUser()
    const notOwner = currentUser !== OverviewProvider.get()[props.id].owner
    const archiveText = ConfigProvider.getLocalisedText("archive")
    return <div>
    <RemoveDialog show = {showRemove} setShow = {setShowRemove} action = {() => OverviewProvider.removeList(props.id)}/>    
    <RenameDialog show = {showRename} setShow = {setShowRename} action = {newName => OverviewProvider.renameList(props.id,newName)}/>
    <Form.Label onClick = {_ => navigate("/listView?id=" + props.id)}>{props.name}</Form.Label>
 <Button variant = "secondary" disabled = {notOwner} onClick = {_ => OverviewProvider.setArchived(props.id,true)}>{archiveText}</Button>
 <Button variant = "secondary" onClick = {_ => setShowRename(true)}>{ConfigProvider.getLocalisedText("rename")}</Button>
 <Button variant = "danger" onClick = {_ => setShowRemove(true)}>{ConfigProvider.getLocalisedText("remove")}</Button>
</div>
}