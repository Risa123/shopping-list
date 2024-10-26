const express = require("express")
const app = express()
app.use(require("cors")())
app.use(express.json())
const PORT = 8000

app.listen(PORT,()=>{
    console.log('ShoppingList server listening ${port}')
})