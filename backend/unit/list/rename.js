const {post,evaluteTest,getAuthToken,OK,getListID} = require("../common")

module.exports = async()=>{
  const res = await post("list/rename",{
    authToken:getAuthToken(),
    listID:getListID(),
    newName:"test"
  })
  return await evaluteTest(res.status,null,null,OK)
}
