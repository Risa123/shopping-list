const {route,compileValidation,OK} = require("../../common")
const abl = require("./abl")

const validate = compileValidation({
    type:"object",
    additionalProperties:false
})
module.exports = (req,res) => route(req,res,validate,OK,abl)