import {useContext,useState} from "react"
import Button from "react-bootstrap/Button"
import ListContext from "./ListProvider"
import ListItem from "./ListItem"
import AddItem from "./AddItem"
import RenameDialog from "../RenameDialog"
import InviteUser from "./InviteUser"
import KickMember from "./KickMember"
import UserContext from "../UserProvider"
import {useNavigate} from "react-router-dom"

export default function ListView(){
   const ListProvider = useContext(ListContext)
   const [showAdd,setShowAdd] = useState(false)
   const [showArchived,setShowArchived] = useState(false)
   const [showRename,setShowRename] = useState(false)
   const [showInvite,setShowInvite] = useState(false)
   const [showKick,setShowKick] = useState(false)
   let itemComponents = []
   for(const [id,item] of Object.entries(ListProvider.getItems())){
     if(!item.archived || showArchived){
      itemComponents.push(<ListItem id = {id} name = {item.name}/>)
     }
   }
   const currentUser = useContext(UserContext).getUser()
   const notOwner = ListProvider.getOwner() !== currentUser
   const navigate = useNavigate()
   return <>
      <AddItem show = {showAdd} setShow = {setShowAdd}/>
      <RenameDialog show = {showRename} setShow = {setShowRename} action = {newName => ListProvider.rename(newName)}/>
      <InviteUser show = {showInvite} setShow = {setShowInvite}/>
      <KickMember show = {showKick} setShow = {setShowKick}/>
      {ListProvider.getName()}
     <Button variant = "secondary" onClick = {_ => navigate("/listOverview")}>back</Button> 
     <Button variant = "secondary" onClick = {_=> setShowRename(true)} disabled = {notOwner}>rename</Button> 
     <Button variant = "secondary" onClick = {_ => setShowInvite(true)}>invite</Button>
     <Button variant = "secondary" onClick = {_ => setShowKick(true)} disabled = {notOwner}>kick</Button>
     <Button variant = "primary" onClick= {_=> setShowAdd(true)}>add item</Button>
     <Button variant = "secondary" onClick = {_=> setShowArchived(!showArchived)}>{showArchived?"hide archived":"show archived"}</Button>
     <Button variant = "secondary" onClick = {_ => ListProvider.kick(currentUser)} disabled = {!notOwner}>leave list</Button>
     {itemComponents}
   </>
}