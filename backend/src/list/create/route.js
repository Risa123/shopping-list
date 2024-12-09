const {CREATED,compileValidation,STRING_MAX,route} = require("../../common")
const abl = require("./abl")

const validate = compileValidation({
    type:"object",
    properties:{
       name:{
         type:"string",
         minLength:1,
         maxLength:STRING_MAX
       },
       authToken:{
         type:"string",
         format:"uuid"
       }
    },
    required:["name","authToken"],
    additionalProperties:false
})

module.exports = (req,res) => route(req,res,validate,CREATED,abl)