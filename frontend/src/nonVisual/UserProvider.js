import UserContext from "./UserContext"

export default function UserProvider(props){
    const value = {}
    return <UserContext.Provider value = {value}>{props.children}</UserContext.Provider>
}