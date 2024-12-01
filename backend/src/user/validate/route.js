const {OK,compileValidation,STRING_MAX,route} = require("../../common")
const abl = require("./abl")

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
    required:["name","password"],
    additionalProperties:false
})
module.exports = (req,res) => route(req,res,validate,OK,abl)