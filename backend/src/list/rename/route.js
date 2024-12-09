const {OK,compileValidation,STRING_MAX,route} = require("../../common")
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
      newName:{
        type:"string",
        minLength:1,
        maxLength:STRING_MAX
      }
    },
    required:["listID","authToken","newName"],
    additionalProperties:false
})

module.exports = (req,res) => route(req,res,validate,OK,abl)