const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/index')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const config = require('../config/index')

router.post('/register',
    [
        check('email', 'Incorrect email').normalizeEmail().isEmail(),
        check('password', 'Password is too short. Minimum length is 10 characters').isLength({ min: 6 })
    ],
    async (req, res) => {

        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array(), message: 'Invalid data' })
            }

            const { email, password } = req.body

            const candidate = await User.findOne({ email })

            if (candidate) {
                return res.status(500).json({ message: `User already exists` })
            }
            
            const passwordHash = await bcrypt.hash(password, 11)
            const user = new User({ email, password: passwordHash })
            await user.save()

            res.status(201).json({ message: 'User has been created' })

        } catch (e) {
            res.status(500).json({ message: 'Server error on register' })
        }

    })

router.post('/login',
    [
        check('email', 'Incorrect email').normalizeEmail().isEmail(),
        check('password', 'No password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array(), message: 'Invalid data' })
            }

            const { email, password } = req.body

            const user = await User.findOne({ email })

            if (!user) {
                return res.status(400).json({ message: `Wrong email or password` })
            }

            const isPasswordCorrect = await bcrypt.compare(password, user.password)

            if (!isPasswordCorrect) {
                return res.status(400).json({ message: `Wrong email or password` })
            }

            const token = jwt.sign(
                { userId: user.id },
                jwtSecret,
                { expiresIn: '40h' }
            )

            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({ message: 'Server error on login' })
        }
    })


module.exports = router