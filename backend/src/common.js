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
function route(req,res,validate,sucessCode,abl){
  if(validate(req.body)){
    try{
      abl(req.body).then(data => res.status(sucessCode).json(data))
    }catch(e){
      console.error(e.stack)
      res.sendStatus(INTERNAL_ERROR)
    }
  }else{
    res.sendStatus(BAD_REQUEST)
  }
}
module.exports = {OK,CREATED,compileValidation,STRING_MAX,route}