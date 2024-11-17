const router = require("express").Router()
const Ajv = require("ajv")
const {BAD_REQUEST,CREATED} = require("../common")

const validate = new Ajv().compile({
    type:"object",
    properties:{
       name:{type:"string"},
       userName:{type:"string"},
       userPassword:{type:"string"}
    },
    required:["name","userName","userPassword"],
    additionalProperties:false
})
router.post("/listCreate",(req,res)=>{
  if(validate(req.body)){
     res.send(CREATED)
  }else{
     res.send(BAD_REQUEST)
  }
})
module.exports = router