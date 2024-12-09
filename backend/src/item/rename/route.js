const {STRING_MAX,OK,route,compileValidation} = require("../../common")
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
       itemID:{
         type:"string",
         format:"uuid"
       },
       newName:{
         type:"string",
         minLength:1,
         maxLength:STRING_MAX
       }
    },
    required:["authToken","listID","itemID","newName"],
    additionalProperties:false
})

module.exports = (req,res) => route(req,res,validate,OK,abl)