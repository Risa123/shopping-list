import Login from "./Login"
import {Outlet} from "react-router-dom"
import Form from "react-bootstrap/Form"
import {useContext} from "react"
import ConfigContext,{COLOR_MODE_DARK,COLOR_MODE_LIGHT} from "./ConfigProvider"
import Button from "react-bootstrap/Button"

export default function Layout(){
    const ConfigProvider = useContext(ConfigContext)
    const languages = ConfigProvider.getLanguages()
    let langElements = []
    for(const lang of languages){
        langElements.push(<option>{lang}</option>)
    }
    const colorModeKey = ConfigProvider.getColorMode() === COLOR_MODE_DARK?"darkMode":"lightMode"
    return <div data-bs-theme = {ConfigProvider.getColorMode()}>
         <Login/>
         <Form.Select onChange = {e => ConfigProvider.setLanguage(e.target.value)}>{langElements}</Form.Select>
         <Button variant = "secondary" onClick = {_ =>{
            ConfigProvider.setColorMode(ConfigProvider.getColorMode() === COLOR_MODE_DARK?COLOR_MODE_LIGHT:COLOR_MODE_DARK)
         }}>{ConfigProvider.getLocalisedText(colorModeKey)}</Button>
         <Outlet/>
    </div>
}