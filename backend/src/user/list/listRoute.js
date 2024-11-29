const {route,compileValidation,OK} = require("../../common")
const abl = require("./userListAbl")

const validate = compileValidation({
    type:"object",
    additionalProperties:false
})
module.exports = (req,res) => route(req,res,validate,OK,abl)