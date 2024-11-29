const {CREATED,compileValidation,STRING_MAX, route} = require("../../common")
const abl = require("./listCreateAbl")

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
module.exports = (req,res) => route(req,res,validate,CREATED,abl)