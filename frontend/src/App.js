import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ListView from "./visual/ListView"
import ListProvider from "./nonVisual/ListProvider"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App(){
  return <ListProvider>  
  <div className ="App">
  <BrowserRouter>
    <Routes>
      <Route path = "/">
       <Route index element = {<ListView/>}/>
       <Route path = "*" element = {"not found"}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  </ListProvider>
}