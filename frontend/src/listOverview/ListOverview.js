import {useState,useContext} from "react"
import Button from "react-bootstrap/Button"
import CreateList from "./CreateList"
import OverviewContext from "./OverviewProvider"
import List from "./List"

export default function ListOverview(){
    const [showCreate,setShowCreate] = useState(false)
    const OverviewProvider = useContext(OverviewContext)
    const [showArchived,setShowArchived] = useState(false)
    const listElements = []
    for(const [id,list] of Object.entries(OverviewProvider.get())){
       listElements.push(<List id = {id} name = {list.name}/>)
    }
    return <div>
        <CreateList show = {showCreate} setShow = {setShowCreate}/>
        <Button variant = "primary" onClick = { _ => setShowCreate(true)}>create list</Button>
        <Button variant = "secondary" onClick = {_ => setShowArchived(!showArchived)}>{showArchived?"hide archived":"show archived"}</Button>
        {listElements}
    </div>
}