const {post,evaluteTest,OK,compileValidation,setAuthToken,getAuthToken} = require("../common")

module.exports = async()=>{
    const res = await post("user/login",{
        name:"owner",
        password:"test"
    })
    setAuthToken(await res.json())
    return await evaluteTest(res.status,getAuthToken(),validateSuccess,OK)
}

const validateSuccess = compileValidation({
    type:"string",
    format:"uuid"
})