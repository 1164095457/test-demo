module.exports = app =>{
    const mongoose = require('mongoose')
    const mongodbName = 'mongodb://127.0.0.1:27017/maba-demo'
    mongoose.connect('mongodb://127.0.0.1:27017/maba-demo',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false
    },(err) =>{
        if(err){
            return
        }
        console.log('数据库连接成功 ' + mongodbName)
    })
}