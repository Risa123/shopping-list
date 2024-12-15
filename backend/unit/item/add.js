const {post,evaluteTest,compileValidation,getAuthToken,CREATED,getListID,MAX_STRING,setItemID} = require("../common")

module.exports = async()=>{
  const res = await post("item/add",{
    authToken:getAuthToken(),
    listID:getListID(),
    name:"item",
  })
  const body = await res.json()
  setItemID(body._id)
  return await evaluteTest(res.status,body,validate,CREATED)
}

const validate = compileValidation({
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
    archived:{type:"boolean"}
  },
  required:["_id","name","archived"],
  additionalProperties:false
})