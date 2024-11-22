const router = require("express").Router()
const {BAD_REQUEST,OK,compileValidation,INTERNAL_ERROR,STRING_MAX} = require("../common")

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
         minLength:1,
         maxLength:STRING_MAX
      },
      listID:{
         type:"string",
         format:"uuid"
      }
    },
    required:["listID","userName","userPassword"],
    additionalProperties:false
})
router.post("/listDelete",(req,res)=>{
  if(validate(req.body)){
     try{
      
      res.send(OK)
     }catch(e){
      console.log(e.stack)
      res.send(INTERNAL_ERROR)
     }
  }else{
     res.send(BAD_REQUEST)
  }
})
module.exports = router