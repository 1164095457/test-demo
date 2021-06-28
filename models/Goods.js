const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{ type:String, required:true },
    price:{ type:String, required:true },
    recommend:{ type:Number, required:true },
    categoryes:{ type:String, required:true },
    stock:{ type:String, required:true },
    describe:{ type:String, required:true },
    state:{ type:Boolean},
    image:{ type:String },
    browse:{ type:Number },
    categories:{ type: mongoose.SchemaTypes.ObjectId, ref:'Category' },
    skills:[
        {
            image:{ type:String, required: true }
        }
    ],
    content:{ type:String, required: true }
},{
    timestamps: true
})


module.exports = mongoose.model('Goods',schema)