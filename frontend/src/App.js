import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ListView from "./listView/ListView"
import ListOverview from "./listOverview/ListOverview"
import {ListProvider} from "./listView/ListProvider"
import {UserProvider} from "./UserProvider"
import {OverviewProvider} from "./listOverview/OverviewProvider"
import Layout from "./Layout"

export default function App(){
  return <UserProvider>
    <OverviewProvider>
    <ListProvider>  
  <div className = "App">
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = <Layout/> >
       <Route path = "/listView" element = <ListView/> />
       <Route path = "*" element = {"not found"}/>
       <Route index element = <ListOverview/> />
       <Route path = "/listOverview" element = <ListOverview/>/>
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  </ListProvider>
  </OverviewProvider>
  </UserProvider>
}