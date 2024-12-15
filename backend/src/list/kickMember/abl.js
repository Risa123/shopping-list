const {kickMember,get} = require("../dao")
const {getByAuthToken,AuthException} = require("../../user/dao")

module.exports = async request =>{
    const userName = (await getByAuthToken()).name
    const list = await get(request.listID)
    if(userName == list.owner || userName == request.memberName){
        await kickMember(request.listID,userName)
    }else{
        throw new AuthException("user is not authorised to remove this member")
    }
}