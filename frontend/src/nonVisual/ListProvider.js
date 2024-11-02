import {useState} from "react"
import ListContext from "./ListContext"

export default function ListProvider(props){
  const [name] = useState("list")
  const [items,setItems] = useState({})
  const value = {
    getItems:()=>items,
    getName:()=>name,
    addItem:(name)=>{
      items[crypto.randomUUID()] = {name:name,archived:false}
      setItems(items)
    },
    remove:(id)=>{
      delete items[id]
      setItems(items)
    },
    rename:(id,newName)=>{
      items[id].name = newName
      setItems(items)
    },
    setArchived:(id,status)=>{
      items[id].archived = status
      setItems(items)
    }
  }
 return <ListContext.Provider value = {value}>{props.children}</ListContext.Provider> 
}