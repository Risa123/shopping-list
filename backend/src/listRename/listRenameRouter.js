const router = require("express").Router()
const Ajv = require("ajv")
const {BAD_REQUEST,CREATED} = require("../common")

const ajv = new Ajv()
require("ajv-formats")(ajv)

const validate = ajv.compile({
    type:"object",
    properties:{
      userName:{type:"string"},
      userPassword:{type:"string"},
      listID:{
         type:"string",
         format:"uuid"
      },
      newName:{type:"string"}
    },
    required:["listID","userName","userPassword"],
    additionalProperties:false
})
router.post("/listRename",(req,res)=>{
  if(validate(req.body)){
     res.send(CREATED)
  }else{
     res.send(BAD_REQUEST)
  }
})
module.exports = router