const express = require('express')
const taskRoutes = require('./routes/tasks')
const authRoutes = require('./routes/auth')
const { DEFAULT_PORT, MONGO_URI } = require('./config/index')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()

app.use(express.json({ extended: true }))


router.use('/auth', authRoutes)
// router.use('/tasks', taskRoutes)
app.use('/api/v1', router)



async function start() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        app.listen(DEFAULT_PORT, () => console.log(`Server started at port ${DEFAULT_PORT}`))
    }
    catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}


start()
