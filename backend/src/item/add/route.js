const {CREATED,compileValidation,STRING_MAX,route} = require("../../common")
const abl = require("./abl")

const validate = compileValidation({
    type:"object",
    properties:{
       authToken:{
         type:"string",
         format:"uuid"
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
    required:["authToken","listID","name"],
    additionalProperties:false
})

module.exports = (req,res) => route(req,res,validate,CREATED,abl)