module.exports = app =>{
    const express = require('express')
    const User = require('../models/User.js')
    const Goods = require('../models/Goods.js')
    const Category = require('../models/Category.js')
    const Client = require('aliyun-api-gateway').Client;
    // const clients = new Client('203915020','MKz9WLwVVw5c8G1xT0xdsuRP1IPcH8fj');
    // const bodyParser = require('body-parser')
    // app.use(bodyParser.json())
    // app.use(bodyParser.urlencoded({ extended:false }))

    // app.post('/test/api/getCarNumberInfo',async(req,res) =>{
    //     console.log(req.body.img)
    //     let url = 'http(s)://dm-53.data.aliyun.com/rest/160601/ocr/ocr_vehicle.json'
    //         let result = await clients.post(url,{
    //             data:{
    //                 image:req.body.img
    //             },
    //             headers:{                
    //                 accept:'application/json'
    //             }
    //         })
    //         res.json(result)
    // })




    //  查找所有商品
    app.get('/test/api/goods',async(req, res) =>{
        // const item = await Goods.find(req.body).populate('categories')
        const item = await Goods.find(req.body).sort({_id:-1})
        res.send(item)
    })

    //  查找上架商品
    app.get('/test/api/goodsList',async(req, res) =>{
        const item = await Goods.find({state: req.body.state = true},(err,docs) =>{
            console.log(docs)
        }).sort({updatedAt:-1})
        res.send(item)
    })
    
    //  根据id查找商品
    app.get('/test/api/goods/:id',async(req, res) =>{
        const item = await Goods.findById(req.params.id)
        res.send(item)
    })

    //  模糊查询商品名称
    app.get('/test/api/goods_search/:names', async(req,res) =>{
        let query = new RegExp(req.params.names)
        const item = await Goods.find({$or:[{"name": query}]})
        res.send(item)
    })

    //  添加商品
    app.post('/test/api/goods', async(req,res) =>{
        const item = await Goods.create(req.body)
        res.send(item)
    })

    //  修改商品
    app.put('/test/api/goods/:id', async(req,res) =>{
        const item = await Goods.findByIdAndUpdate(req.params.id,req.body)
        res.send(item)
    })

    //  删除商品
    app.delete('/test/api/goods/:id', async(req, res) =>{
        await Goods.findByIdAndDelete(req.params.id, req.body)
        res.send({
           success:true
        })  //发送给客户端
     })


    //  图片处理
    const multer = require('multer')
    const upload = multer({ dest: __dirname + './../uploads' })
    app.post('/test/api/upload', upload.single('file'), async(req, res) =>{
        const file = req.file
        file.url = `http://localhost:3001/uploads/${file.filename}`
        res.send(file)
    })

    
    //  新建分类
    app.post('/test/api/category',async(req,res) =>{
        const item = await Category.create(req.body)
        res.send(item)
    })
    //  查询分类
    app.get('/test/api/category',async(req, res) =>{
        const item = await Category.find(req.body).sort({_id:-1})
        res.send(item)
    })
    //  删除分类
    app.delete('/test/api/category/:id', async(req, res) =>{
        await Category.findByIdAndDelete(req.params.id, req.body)
        res.send({
           success:true
        })  //发送给客户端
     })


    const client = new Client('203915020','MKz9WLwVVw5c8G1xT0xdsuRP1IPcH8fj');
    app.get('/test/api/expressInfo',async(req,res) =>{
        let url = 'https://wuliu.market.alicloudapi.com/kdi';
        let result = await client.get(url, {
            data: {
                'no': req.query.no
            },
            headers: {
            accept: 'application/json'
            }
        });
        res.send(result)
    })
    






    //  注册
    app.post('/test/api/register', async(req,res) =>{
        const user = await User.findOne({username:req.body.username})
        if(user){
            return res.status(422).send({message:'用户已存在,请重新命名'})
        }
        const newUser = await new User(req.body).save()
        res.send(newUser)
        
    })
    //  登录
    app.post('/test/api/login', async(req, res) =>{
        const user = await User.findOne({ username:req.body.username})
        if(!user){
            return res.status(422).send({
                message:'用户不存在'
            })
        }
        const isValid = require('bcryptjs').compareSync(req.body.password,user.password)
        if(!isValid){
            return res.status(422).send({
                message:'密码错误'
            })
        }
        const jwt = require('jsonwebtoken');
        const token = jwt.sign({ id:user._id },app.get('secret'))
        res.send({user,token})

    })
    
}