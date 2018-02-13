const Koa = require('koa')
const Router =require('koa-router')
const bodyParser = require('koa-bodyparser')
const User = require('./app/api/senduser.js')
const app = new Koa()
const router =new Router()

app.use(bodyParser())

// router.post('/senduser',async function(context){
//   let data=context.request.body
//   if(2561-data.year >=20){context.body="old"}
//   else context.body= "young"
// })

router.get('/:name/:name1',async function(context){
    console.log(context.params.name)
    console.log(context.params.name1)
    context.body= context.params.name
    context.body+= context.params.name1
})

router.use('/user',User.senduser)

app.use(router.routes())
app.use(router.allowedMethods())

console.log('App listen at 3000')
app.listen(3000)
