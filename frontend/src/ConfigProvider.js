import {createContext,useState} from "react";


const ConfigContext = createContext()
const texts = {
    CZ:{
      chancel:"Zavřít",
      ok:"Ok",
      login:"Přihlásit se",
      remove:"Smazat",
      rename:"Přejmenovat",
      invite:"Pozvat",
      addItem:"Přidat položku",
      archive:"Archivovat",
      showArchived:"zobrazit i archivované",
      hideArchived:"skrýt archivované",
      create:"Vytvořit",
      createList:"Vytvořit seznam",
      kick:"Vyhodit",
      userName:"Uživatelské jméno",
      userPassword:"Heslo",
      loginError:"Chybné uživatelské jméno nebo heslo."
    },
    EN:{
       chancel:"Chancel",
       ok:"Ok",
       login:"Login",
       remove:"Remove",
       rename:"Rename",
       invite:"Invite",
       addItem:"Add Item",
       archive:"Archive",
       showArchived:"Show Archived",
       hideArchived:"Hide Archive",
       create:"Create",
       createList:"Create List",
       kick:"Kick",
       userName:"User Name",
       userPassword:"Password",
       loginError:"Wrong user name or password"
    }
}
export function ConfigProvider(props){
    const [language,setLanguage] = useState("CZ")
    const [colorMode,setColorMode] = useState(COLOR_MODE_LIGHT)
    const value = {
        setLanguage:language => setLanguage(language),
        getLanguage:() => language,
        getLocalisedText:key => texts[language][key],
        setColorMode:colorMode => setColorMode(colorMode),
        getColorMode:() => colorMode
    }
    return <ConfigContext.Provider value = {value}>{props.children}</ConfigContext.Provider>
}
export default ConfigContext
export const COLOR_MODE_DARK = "dark"
export const COLOR_MODE_LIGHT = "light"