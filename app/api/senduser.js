const Router =require('koa-router')
const User =new Router()

User.post('/senduser',async function(context){
  let data=context.request.body
  if(2561-data.year >=20){context.body="old"}
  else context.body= "young"
})
module.exports= User
