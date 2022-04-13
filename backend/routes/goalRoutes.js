const express = require('express')
const {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/').get(protect, getGoal).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router