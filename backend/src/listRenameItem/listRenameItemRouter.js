const router = require("express").Router()
const Ajv = require("ajv")
const {BAD_REQUEST,STRING_MAX,OK,INTERNAL_ERROR} = require("../common")


const validate = new Ajv().compile({
    type:"object",
    properties:{
       userName:{
        type:"string",
        minLength:1,
        maxLength:STRING_MAX,
       },
       userPassword:{
        type:"string",
        minLength:1,
        maxLength:STRING_MAX
      },
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
router.post("/listRenameItem",(req,res)=>{
  if(validate(req.body)){
    try{
      
      res.send(OK)
    }catch(e){
      console.error(e.stack)
      res.send(INTERNAL_ERROR)
    }
  }else{
     res.send(BAD_REQUEST)
  }
})
module.exports = router