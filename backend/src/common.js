const Ajv = require("ajv")

const ajv = new Ajv()
require("ajv-formats")(ajv)
const BAD_REQUEST = 400
const OK = 200
const INTERNAL_ERROR = 500
const CREATED = 201
const STRING_MAX = 5000
function compileValidation(scheme){
  return ajv.compile(scheme)
}
module.exports = {BAD_REQUEST,OK,INTERNAL_ERROR,CREATED,compileValidation,STRING_MAX}