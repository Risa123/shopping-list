const router = require("express").Router()
const {BAD_REQUEST,CREATED,compileValidation,STRING_MAX,INTERNAL_ERROR} = require("../common")

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
       },
       name:{
         type:"string",
         minLength:1,
         maxLength:STRING_MAX
      },
    },
    required:["userName","userPassword","listID","name"],
    additionalProperties:false
})
router.post("/listAddItem",(req,res)=>{
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