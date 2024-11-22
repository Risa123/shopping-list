const router = require("express").Router()
const {BAD_REQUEST,CREATED,compileValidation,STRING_MAX} = require("../common")

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
router.post("/listInviteMemberRouter",(req,res)=>{
  if(validate(req.body)){
     res.send(CREATED)
  }else{
     res.send(BAD_REQUEST)
  }
})
module.exports = router