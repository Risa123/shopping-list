const router = require("express").Router()
const {BAD_REQUEST,OK,compileValidation,STRING_MAX,INTERNAL_ERROR} = require("../common")


const validate = compileValidation({
    type:"object",
    properties:{
       userName:{
        type:"string",
        minLength:1,
        maxLength:STRING_MAX
       },
       userPassword:{
        type:"string",
        minLegth:1,
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
router.post("/listSetItemStatus",(req,res)=>{
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