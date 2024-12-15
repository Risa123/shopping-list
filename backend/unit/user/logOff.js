const {post,evaluteTest,OK,getAuthToken} = require("../common")

module.exports = async()=>{
  const res = await post("user/logOff",{authToken:getAuthToken()})
  return await evaluteTest(res.status,null,null,OK)
}