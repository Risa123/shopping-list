import {useContext,useState} from "react"
import Button from "react-bootstrap/Button"
import ListContext from "../nonVisual/ListContext"
import List from "./List"
import InputModal from "./InputModal"

export default function ListView(){
   const ListProvider = useContext(ListContext)
   let itemComponents = []
   for(const listItem of ListProvider.getItems()){
      itemComponents.push(<List name = {listItem}/>)
   }
   const [showAdd,setShowAdd] = useState(false)
   return <div>
      <InputModal title = "add item" show = {showAdd} setShow = {setShowAdd}/>
      {ListProvider.getName()}
     <Button>rename</Button> 
     <Button>invite</Button>
     <Button>kick</Button>
     <Button variant = "primary" onClick={()=>setShowAdd(true)}>add item</Button>
     <Button>toggle archived visibility</Button>
     {itemComponents}
   </div>
}