const {TestFailedException} = require("./unit/common")

async function test(endpoint){
  console.group(`test ${endpoint} started`)
  await require("./unit/" + endpoint)()
  console.groupEnd()
}

async function run(){
  console.log("testing started")
  try{
    await test("user/login")
    await test("user/list")
    await test("list/create")
    try{
      await test("list/list")
      await test("list/inviteMember")
      await test("list/kickMember")
      await test("list/get")
      await test("list/delete")
      await test("user/logOff")
    }catch(e){
      await test("list/delete")
      await test("user/logOff")
      throw e
    }
    console.log("all tests were successfull")
  }catch(e){
    if(!(e instanceof TestFailedException)){
      throw e
    }
  }
}

run()