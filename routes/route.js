const express = require('express')
const router = express.Router()
const {getGet, getPost, getPut, getDelete} = require('../controllers/indexcontroller')

router.route('/').get(getGet).post(getPost)
router.route('/:id').delete(getDelete).put(getPut)


module.exports = router