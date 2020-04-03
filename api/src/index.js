const express = require('express')
const cors = require('cors')
const routes = require('./routes')

<<<<<<< HEAD
const app = express()   
=======
const app = express()
>>>>>>> 97dec7a12312d4bd95368c784cc7e6ffbcc145f4

app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3333)
