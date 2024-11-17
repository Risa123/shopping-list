const router = require("express").Router()
const Ajv = require("ajv")
const {BAD_REQUEST,CREATED} = require("../common")


const validate = new Ajv().compile({
    type:"object",
    properties:{
       userName:{type:"string"},
       userPassword:{type:"string"},
       listID:{
         type:"string",
         format:"uuid"
       },
       itemID:{
         type:"string",
         format:"uuid"
       }
    },
    required:["userName","userPassword","listID","itemID"],
    additionalProperties:false
})
router.post("/listDeleteItem",(req,res)=>{
  if(validate(req.body)){
     res.send(CREATED)
  }else{
     res.send(BAD_REQUEST)
  }
})
module.exports = router