const {post,evaluteTest,compileValidation,getAuthToken,MAX_STRING,CREATED,setListID,validateList} = require("../common")

module.exports = async()=>{
  const res = await post("list/create",{
    authToken:getAuthToken(),
    name:"list",
  })
  const body = await res.json()
  setListID(body._id)
  return await evaluteTest(res.status,body,validate,CREATED)
}

const validate = compileValidation(validateList)