import {createContext,useState} from "react"
import {post} from "./requestCommon"

const UserContext = createContext()
export function UserProvider(props){
    const [user,setUser] = useState(null)
    const value = {
        getAllUsers:() => ["member","notMember","owner"],
        getUser:() => user,
        login:async(name,password) =>{
            if(!(await post("userValidate",{name:name,password:password}))){
                return false
            }
            setUser(name)
            return true
        }
    }
    return <UserContext.Provider value = {value}>{props.children}</UserContext.Provider>
}
export default UserContext