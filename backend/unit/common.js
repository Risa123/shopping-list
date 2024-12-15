const Ajv = require("ajv")

const ajv = new Ajv()
require("ajv-formats")(ajv)
const SERVER_ADDRESS = "http://localhost:8000/"

const BAD_REQUEST = 400
const OK = 200
const INTERNAL_ERROR = 500
const CREATED = 201
const UNAUTHORISED = 401
const NOT_FOUND = 404
const MAX_STRING = 5000

class TestFailedException extends Error{}

let authToken,listID

async function get(requestName){
  return await fetch(SERVER_ADDRESS + requestName,{method:"GET"})
}

async function post(requestName,body){
    return await fetch(SERVER_ADDRESS + requestName,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
    })
}

async function evaluteTest(status,body,bodyValidate,expectedStatus){
  if(status != expectedStatus || (bodyValidate?!bodyValidate(body):body != null)){
    console.error("result failed")
    if(status != expectedStatus){
      console.error(`expected http code ${expectedStatus} received ${status}`)
      console.error("body was " + JSON.stringify(body))
    }else{
      console.error(`body ${JSON.stringify(body)} not valid`)
    }
    throw new TestFailedException()
  }
  console.log("result sucessfull")
  console.log("http code " + status)
  console.log("body was " + JSON.stringify(body))
}

function compileValidation(scheme){
  return ajv.compile(scheme)
}

function setAuthToken(value){
  authToken = value
}

function getAuthToken(){
  return authToken
}


function setListID(id){
  listID = id
}

function getListID(){
  return listID
}
const validateList = {
  type:"object",
  properties:{
    _id:{
      type:"string",
      format:"uuid"
    },
    name:{
      type:"string",
      minLength:1,
      maxLength:MAX_STRING
    },
    archived:{type:"boolean"},
    owner:{
       type:"string",
       minLength:1,
       maxLength:MAX_STRING
    },
    members:{
      type:"array",
      items:{
       type:"string",
       minLength:1,
       maxLength:MAX_STRING
      }
    },
    items:{
      type:"array",
      items:{
       type:"object",
       properties:{
         name:{
           type:"string",
           minLength:1,
           maxLength:MAX_STRING
         },
         archived:{type:"boolean"},
         _id:{
           type:"string",
           format:"uuid"
         }
       },
       additionalProperties:false,
       required:["name","archived","_id"]
      }
    }
  },
  additionalProperties:false,
  required:["name","_id","archived","members","items"]
}
module.exports = {get,post,evaluteTest,BAD_REQUEST,OK,INTERNAL_ERROR,CREATED,UNAUTHORISED,NOT_FOUND,compileValidation,
  setAuthToken,getAuthToken,MAX_STRING,setListID,getListID,validateList,TestFailedException
}