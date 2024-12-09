import {createContext,useContext,useState} from "react"
import UserContext from "../UserProvider"

const OverviewContext = createContext()

export function OverviewProvider(props){
    const [data,setData] = useState({})
    const owner = useContext(UserContext).getUser()
    const value = {
        createList:name =>{
            data[crypto.randomUUID()] = {name:name,solved:false,owner:owner}
            setData({...data})
        },
        get:() => data,
        removeList:id =>{
            delete data[id]
            setData({...data})
        },
        renameList:(id,newName) =>{
           data[id].name = newName
           setData({...data})
        },
        setArchived:(id,archived) =>{
            data[id].archived = archived
            setData({...data})
        }
    }
    return <OverviewContext.Provider value = {value}>{props.children}</OverviewContext.Provider>
}

export default OverviewContext