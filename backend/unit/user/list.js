const {post,evaluteTest,compileValidation,getAuthToken,OK} = require("../common")

module.exports =  async()=>{
  const res = await post("user/list",{
    authToken:getAuthToken()
  })
  return await evaluteTest(res.status,await res.json(),validate,OK)
}

const validate = compileValidation({
   type:"array",
   items:{
    type:"string"
   }
})