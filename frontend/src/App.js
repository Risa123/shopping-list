import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ListView from "./listView/ListView"
import {ListProvider} from "./listView/ListProvider"
import {UserProvider} from "./UserProvider"

export default function App(){
  return <ListProvider>  
    <UserProvider>
  <div className = "App">
  <BrowserRouter>
    <Routes>
      <Route path = "/">
       <Route index element = <ListView/> />
       <Route path = "*" element = {"not found"}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  </UserProvider>
  </ListProvider>
}