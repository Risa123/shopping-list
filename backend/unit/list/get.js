const {post,evaluteTest,getAuthToken,OK,getListID,compileValidation,validateList} = require("../common")

module.exports =  async()=>{
  const res = await post("list/get",{
    authToken:getAuthToken(),
    listID:getListID()
  })
  return await evaluteTest(res.status,await res.json(),validate,OK)
}

const validate = compileValidation(validateList)