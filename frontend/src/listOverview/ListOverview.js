import {useState,useContext} from "react"
import Button from "react-bootstrap/Button"
import CreateList from "./CreateList"
import OverviewContext from "./OverviewProvider"
import List from "./List"
import ConfigContext from "../ConfigProvider"

export default function ListOverview(){
    const [showCreate,setShowCreate] = useState(false)
    const OverviewProvider = useContext(OverviewContext)
    const ConfigProvider = useContext(ConfigContext)
    const createList = ConfigProvider.getLocalisedText("createList")
    const [showArchived,setShowArchived] = useState(false)
    const filterText = showArchived?ConfigProvider.getLocalisedText("hideArchived"):ConfigProvider.getLocalisedText("showArchived")
    const listElements = []
    for(const [id,list] of Object.entries(OverviewProvider.get(showArchived))){
       listElements.push(<List id = {id} name = {list.name}/>)
    }
    return <>
        <CreateList show = {showCreate} setShow = {setShowCreate}/>
        <Button variant = "primary" onClick = { _ => setShowCreate(true)}>{createList}</Button>
        <Button variant = "secondary" onClick = {_ => setShowArchived(!showArchived)}>{filterText}</Button>
        {listElements}
    </>
}