const {BAD_REQUEST,OK,compileValidation,INTERNAL_ERROR,STRING_MAX} = require("../common")

const validate = compileValidation({
    type:"object",
    properties:{
      name:{
        type:"string",
        minLength:1,
        maxLength:STRING_MAX
      },
      password:{
        type:"string",
        minLength:1,
        maxLength:STRING_MAX
      }
    },
    required:["userName","userPassword"],
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