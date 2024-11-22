const router = require("express").Router()
const {BAD_REQUEST,CREATED,compileValidation,STRING_MAX,INTERNAL_ERROR} = require("../common")

const validate = compileValidation({
    type:"object",
    properties:{
       name:{
         type:"string",
         minLength:1,
         maxLength:STRING_MAX
       },
       userName:{
         type:"string",
         minLength:1,
         maxLength:STRING_MAX
      },
      userPassword:{
         type:"string",
         minLength:1,
         maxLength:STRING_MAX
      }
    },
    required:["name","userName","userPassword"],
    additionalProperties:false
})
router.post("/listCreate",(req,res)=>{
  if(validate(req.body)){
     try{
      res.send(CREATED)
     }catch(e){
        console.error(e.stack)
        res.send(INTERNAL_ERROR)
     }
  }else{
     res.send(BAD_REQUEST)
  }
})
module.exports = router