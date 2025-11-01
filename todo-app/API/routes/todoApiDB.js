const { Router } = require('express');
const router = Router();
const TodoApiDB = require('../db/api')

// Get all todoApiDBs 
/**
 * @swagger
 * /api:
 *   get:
 *     summary: دریافت لیست تمامی وظایف
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: لیست وظایف با موفقیت بازگردانده شد
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', async (req, res) => {
    try {
        const todoApiDBs = await TodoApiDB.find()
        res.send(todoApiDBs)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Create a new todoApiDB
router.post('/', async (req, res) => {
    // console.log(req.body);
    try {
        const todoApiDBs = await TodoApiDB.find()
        let todoApiDB = new TodoApiDB({
            todoId: todoApiDBs.length + 1,
            todoTitle: req.body.todoTitle,
            todoStart: req.body.todoStart,
            todoTime: req.body.todoTime,
            todoPr: req.body.todoPr
        })
        todoApiDB = await todoApiDB.save()
        res.send(todoApiDB)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Get todoApiDB By ID
router.get('/:id', async (req, res) => {
    try {
        const todoApiDB = await TodoApiDB.find({ todoId: req.params.id })
        res.send(todoApiDB)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Update todoApiDB By ID
router.put('/:id', async (req, res) => {
    try {
        const todoApiDB = await TodoApiDB.updateOne({ todoId: req.params.id }, {
            todoId: req.params.id,
            todoTitle: req.body.todoTitle,
            todoStart: req.body.todoStart,
            todoTime: req.body.todoTime,
            todoPr: req.body.todoPr
        }, { new: true })
        res.send(todoApiDB)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Delete todoApiDB By ID
router.delete('/:id', async (req, res) => {
    try {
        const todoApiDB = await TodoApiDB.deleteOne({ todoId: req.params.id })
        res.send(todoApiDB)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router