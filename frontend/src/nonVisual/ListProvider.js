import {useState} from "react"
import ListContext from "./ListContext"

export default function ListProvider(props){
  const [data] = useState({
    name:"testList",
    items:["item1","item2"]
  })
  const value = {
    getItems:()=>data.items,
    getName:()=>data.name
  }
 return <ListContext.Provider value = {value}>{props.children}</ListContext.Provider> 
}