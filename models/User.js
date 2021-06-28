const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{ type:String, required:true,unique: true },
    password:{ type:String, required:true,
    set(val){
        return require('bcryptjs').hashSync(val,5)
    }},
    power:{ type:String }
})


module.exports = mongoose.model('User',schema)