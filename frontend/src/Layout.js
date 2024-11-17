import Login from "./Login"
import {Outlet} from "react-router-dom"

export default function Layout(){
    return <>
         <Login/>
         <Outlet/>
    </>
}