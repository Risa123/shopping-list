import {createContext,useState} from "react"

const UserContext = createContext()
export function UserProvider(props){
    const [user,setUser] = useState(null)
    const value = {
        getAllUsers:() => ["member","notMember","owner"],
        getUser:() => user,
        login:(name) => setUser(name)
    }
    return <UserContext.Provider value = {value}>{props.children}</UserContext.Provider>
}
export default UserContext