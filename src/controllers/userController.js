const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const User = db.user
const Order = db.order


const allUser = async(req, res) => {
    const getAll = await User.findAll({ include: Order });
    res.send(getAll)
}
const singleUser = async(req, res) => {
    try {

        const sigleFind = await User.findByPk(req.parmas.id, {
            include: [{
                model: Order
            }]
        })
        if (sigleFind) {
            res.send(singleUser)
        } else {
            res.send('User not found 404')
        }
    } catch (error) {
        res.send(error)
    }

}
const deleteUser = async(req, res) => {
    try {
        id = req.parmas.id;
        console.log(id);
        const sigleFind = await User.destroy({ where: { id: id } })
        res.send('data has been delete of ' + id)

    } catch (error) {
        res.send(error)
    }

}
const updateUser = async(req, res) => {
    try {
        id = req.parmas.id;
        if (id) {
            const { name, email, pass } = req.body
            const sigleFind = await User.update({
                name: name,
                email: email,
                pass: pass
            }, { where: { id: id } })
            res.send('data has been delete of ' + id)
        } else {
            res.send('not found id = ' + id)
        }
    } catch (error) {
        res.send(error)
    }

}


module.exports = {
    singleUser,
    deleteUser,
    updateUser,
    allUser
}