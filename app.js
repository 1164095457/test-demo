const express = require('express')
const app = express()
app.set('secret','yyyyy')
app.use(require('cors')())
app.use(express.json())

app.use('/', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))


require('./plugins/db.js')(app)
require('./routes/admin.js')(app)




app.listen(3001, () => console.log('http://localhost:3001'))