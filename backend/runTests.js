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
      await test("list/rename")
      await test("list/setArchiveStatus")
      await test("item/add")
      await test("item/rename")
      await test("item/setArchiveStatus")
      await test("list/get")
      await test("item/delete")
      await test("list/delete")
      await test("user/logOff")
    }catch(e){
      console.error("some tests failed cleaning up")
      await test("list/delete")
      await test("user/logOff")
      throw e
    }
    console.log("all tests were successfull")
  }catch(e){
    if(!(e instanceof TestFailedException)){
      console.error("some tests failed")
      throw e
    }
  }
}

run()