const router = require("express").Router()
const Ajv = require("ajv")
const {BAD_REQUEST,CREATED} = require("../common")

const ajv = new Ajv()
require("ajv-formats")(ajv)

const validate = ajv.compile({
    type:"object",
    properties:{
      userName:{type:"string"},
      userPassword:{type:"string"}
    },
    required:["userName","userPassword"],
    additionalProperties:false
})
router.post("/userValidate",(req,res)=>{
  if(validate(req.body)){
     res.send(CREATED)
  }else{
     res.send(BAD_REQUEST)
  }
})
module.exports = router