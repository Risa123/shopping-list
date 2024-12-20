const express = require("express")
const {connect,close} = require("./database")

const app = express()
const PORT = 8000

app.use(require("cors")())
app.use(express.json())
app.post("/list/create",require("./list/create/route"))
app.post("/item/add",require("./item/add/route"))
app.post("/list/delete",require("./list/delete/route"))
app.post("/item/delete",require("./item/delete/route"))
app.post("/list/get",require("./list/get/route"))
app.post("/list/inviteMember",require("./list/inviteMember/route"))
app.post("/list/kickMember",require("./list/kickMember/route"))
app.post("/list/list",require("./list/list/route"))
app.post("/list/rename",require("./list/rename/route"))
app.post("/list/setArchiveStatus",require("./list/setArchiveStatus/route"))
app.post("/user/login",require("./user/login/route"))
app.post("/item/setArchiveStatus",require("./item/setArchiveStatus/route"))
app.post("/item/rename",require("./item/rename/route"))
app.post("/user/list",require("./user/list/route"))
app.post("/user/logOff",require("./user/logOff/route"))

app.listen(PORT,() =>{
    console.log(`ShoppingList server listening on port ${PORT}`)
    connect()
})

process.on("beforeExit",_ => close())