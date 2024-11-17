const express = require("express")

const app = express()
const PORT = 8000
app.use(require("cors")())
app.use(express.json())
app.use("/listCreate",require("./listCreate/listCreateRouter"))
app.use("/listAddItem",require("./listAddItem/listAddItemRouter"))
app.use("/listDelete",require("./listDelete/listDeleteRouter"))
app.use("/listDeleteItem",require("./listDeleteItem/listDeleteItem"))
app.use("/listGetData",require("./listGetData/listGetDataRouter"))
app.listen(PORT,() => console.log('ShoppingList server listening ${port}'))