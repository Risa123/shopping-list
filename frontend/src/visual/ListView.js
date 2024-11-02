import {useContext,useState} from "react"
import Button from "react-bootstrap/Button"
import ListContext from "../nonVisual/ListContext"
import ListItem from "./ListItem"
import AddItem from "./AddItem"

export default function ListView(){
   const ListProvider = useContext(ListContext)
   const [showAdd,setShowAdd] = useState(false)
   const [showArchived,setShowArchived] = useState(false)
   let itemComponents = []
   for(const [id,item] of Object.entries(ListProvider.getItems())){
     if(!item.archived || setShowArchived){
      itemComponents.push(<ListItem id = {id} name = {item.name}/>)
     }
   }
   return <div>
      <AddItem show = {showAdd} setShow = {setShowAdd}/>
      {ListProvider.getName()}
     <Button variant = "secondary">rename</Button> 
     <Button variant = "secondary">invite</Button>
     <Button variant = "secondary">kick</Button>
     <Button variant = "primary" onClick={_=>setShowAdd(true)}>add item</Button>
     <Button variant = "secondary" onClick = {_=>setShowArchived(!showArchived)}>{showArchived?"hide archived":"show archived"}</Button>
     {itemComponents}
   </div>
}