import {createContext,useState} from "react"
import {post,get} from "./requestCommon"

const UserContext = createContext()
export function UserProvider(props){
    const [user,setUser] = useState(null)
    const value = {
        getAllUsers:async() => await get("user/list"),
        getUser:() => user,
        login:async(name,password) =>{
            if(!(await post("user/login",{name:name,password:password}))){
                return false
            }
            setUser(name)
            return true
        }
    }
    return <UserContext.Provider value = {value}>{props.children}</UserContext.Provider>
}
export default UserContext