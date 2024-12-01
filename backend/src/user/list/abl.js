const {list,getByAuthToken} = require("../dao")

module.exports = async request =>{
    await getByAuthToken(request.authToken) //this dao method throws exception if token is not valid
    const users = await list()
    let userNames = []
    for(const user of users){
        userNames.push(user.name)
    }
    return userNames
}