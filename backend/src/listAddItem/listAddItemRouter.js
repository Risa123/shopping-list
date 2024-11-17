const router = require("express").Router()
const Ajv = require("ajv")
const {BAD_REQUEST,CREATED} = require("../common")

const validate = new Ajv().compile({
    type:"object",
    properties:{
       userName:{type:"string"},
       userPassword:{type:"string"},
       listID:{
         type:"string",
         format:"uuid"
       },
       name:{type:"string"},
    },
    required:["userName","userPassword","listID","name"],
    additionalProperties:false
})
router.post("/listAddItem",(req,res)=>{
    if(validate(req.body)){
        res.send(CREATED)
     }else{
        res.send(BAD_REQUEST)
     }
})
module.exports = router