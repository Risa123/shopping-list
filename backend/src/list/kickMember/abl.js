const {kickMember} = require("../dao")
const {getByUser,AuthException} = require("../../common")
const {getByAuthToken} = require("../../user/dao")

module.exports = async request =>{
    const user = getByAuthToken().name
    const list = getByUser(user)
    if(user == list.owner){
        await kickMember(request.listID,user)
    }else if(user == request.memberName){
        await kickMember(request.listID,user)
    }else{
        throw new AuthException("user is not authorised to remove this member")
    }
}