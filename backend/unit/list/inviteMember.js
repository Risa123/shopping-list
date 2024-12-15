const {post,evaluteTest,getAuthToken,OK,getListID} = require("../common")

module.exports = async()=>{
  const res = await post("list/inviteMember",{
    authToken:getAuthToken(),
    listID:getListID(),
    memberName:"member"
  })
  return await evaluteTest(res.status,null,null,OK)
}
