import {createContext,useContext} from "react"
import UserContext from "../UserProvider"
import {post} from "../requestCommon"

const OverviewContext = createContext()

export function OverviewProvider(props){
    const owner = useContext(UserContext).getUser()
    const value = {
        createList:async name =>  await post("list/create",{
            authToken:owner.authToken,
            name:name
        }),
        get:async() => await post("list/list",{authToken:owner.authToken}),
        removeList:async id => await post("list/delete",{
            authToken:owner.authToken,
            listID:id
        }),
        renameList:async(id,newName) => await post("list/rename",{
            authToken:owner.authToken,
            listId:id,
            newName:newName
        }),
        setArchived:async (id,archived) => await post("list/setArchiveStatus",{
            authToken:owner.authToken,
            listID:id,
            status:archived
        })
    }
    return <OverviewContext.Provider value = {value}>{props.children}</OverviewContext.Provider>
}

export default OverviewContext