import {createContext,useState} from "react"

const UserContext = createContext()
export function UserProvider(props){
    const [user] = useState("owner")
    const value = {
        getAllUsers:() => ["member","notMember","owner"],
        getUser:() => user,
    }
    return <UserContext.Provider value = {value}>{props.children}</UserContext.Provider>
}
export default UserContext