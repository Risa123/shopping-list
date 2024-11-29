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
      },
      status:{type:"boolean"}
    },
    required:["listID","status","authToken"],
    additionalProperties:false
})
module.exports = (req,res) => route(req,res,validate,OK,abl)