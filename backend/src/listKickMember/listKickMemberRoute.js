const {BAD_REQUEST,compileValidation,STRING_MAX,INTERNAL_ERROR,OK} = require("../common")

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
      memberName:{type:"string"}
    },
    required:["listID","userName","userPassword","memberName"],
    additionalProperties:false
})
module.exports = (req,res)=>{
  if(validate(req.body)){
     try{
      res.send(OK)
     }catch(e){
       console.error(e.stack)
       res.sendStatus(INTERNAL_ERROR)
     }
  }else{
     res.sendStatus(BAD_REQUEST)
  }
}