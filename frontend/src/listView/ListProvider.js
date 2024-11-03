import {useState,createContext} from "react"

const ListContext = createContext()
export function ListProvider(props){
  const [name,setName] = useState("list")
  const [items,setItems] = useState({})
  const [members,setMembers] = useState([])
  const [owner,setOwner] = useState("owner")
  const value = {
    getItems:() => items,
    getName:() => name,
    rename:newName => setName(newName),
    getOwner:() => owner,
    setOwner:owner => setOwner(owner),
    invite:user =>{
      members.push(user)
      setMembers([...members])
    },
    kick:user => setMembers(members.filter(current => current !== user)),
    getMembers:() => members,
    addItem:name=>{
      items[crypto.randomUUID()] = {name:name,archived:false}
      setItems(items)
    },
    remove:id=>{
      delete items[id]
      setItems({...items})
    },
    renameItem:(id,newName)=>{
      items[id].name = newName
      setItems({...items})
    },
    setArchived:(id,status)=>{
      items[id].archived = status
      setItems({...items})
    }
  }
 return <ListContext.Provider value = {value}>{props.children}</ListContext.Provider> 
}
export default ListContext