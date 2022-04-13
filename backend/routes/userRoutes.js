const express = require('express')
const { registerUser, authUser, getUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', registerUser)
router.post('/login', authUser)
router.route('/me').get(protect, getUser)

module.exports = router