const {post,evaluteTest,getAuthToken,OK,compileValidation,validateList} = require("../common")

module.exports =  async()=>{
  const res = await post("list/list",{
    authToken:getAuthToken()
  })
  return await evaluteTest(res.status,await res.json(),validate,OK)
}

const validate = compileValidation({
  type:"array",
  items:validateList
})