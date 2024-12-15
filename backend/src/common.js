const Ajv = require("ajv")
const {getByAuthToken,AuthException} = require("./user/dao")
const {getByOwner,getByUser} = require("./list/dao")
const {NotFound} = require("./database")

const ajv = new Ajv()
require("ajv-formats")(ajv)
const BAD_REQUEST = 400
const OK = 200
const INTERNAL_ERROR = 500
const CREATED = 201
const UNAUTHORISED = 401
const NOT_FOUND = 404
const STRING_MAX = 5000

function compileValidation(scheme){
  return ajv.compile(scheme)
}

function route(req,res,validate,sucessCode,abl){
  if(validate(req.body)){
    abl(req.body).then(data => res.status(sucessCode).json(data)).catch(e =>{
        if(e instanceof AuthException){
           res.status(UNAUTHORISED).json(e.message)
        }else if(e instanceof NotFound){
           res.status(NOT_FOUND).json(e.message)
        }else{
          console.error(e.stack)
          res.sendStatus(INTERNAL_ERROR)
        }
    })
  }else{
    const errors = [];
    for(const err of validate.errors){
      errors.push(err.message);
    }
    console.error("bad request: " + errors);
    res.status(BAD_REQUEST).json(errors)
  }
}

async function ifOwnerThen(request,action){
  const user = await getByAuthToken(request.authToken)
  const list = getByOwner(user.name)
    if(list){
       await action()
    }else{
       throw new AuthException("not owner of the list")
    }
}

async function ifMemberOrOwnerThen(request,action){
  await getByUser((await getByAuthToken(request.authToken)).name) //throws exception if list not found
  return await action()
}

module.exports = {OK,CREATED,compileValidation,STRING_MAX,route,ifOwnerThen,ifMemberOrOwnerThen}