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