const express = require('express')
const taskRoutes = require('./routes/tasks')

const PORT = 3333

const app = express()
const router = express.Router()

router.use('/tasks' ,taskRoutes)

app.use('/api/v1', router)

app.listen(PORT, function () { 
    console.log(`Server started at port ${PORT}`)
})