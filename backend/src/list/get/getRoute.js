const {OK,compileValidation,STRING_MAX,route} = require("../../common")
const abl = require("./getAbl")

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
         maxLength:STRING_MAX,
      },
      listID:{
         type:"string",
         format:"uuid"
      }
    },
    required:["listID","userName","userPassword"],
    additionalProperties:false
})
module.exports = (req,res)=> route(req,res,validate,OK,abl)