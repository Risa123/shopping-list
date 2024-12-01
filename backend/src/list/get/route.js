const {OK,compileValidation,route} = require("../../common")
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
      }
    },
    required:["listID","authToken"],
    additionalProperties:false
})
module.exports = (req,res)=> route(req,res,validate,OK,abl)