const { PrismaClient } = require('./../generated/prisma')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const prisma = new PrismaClient()

async function register(req, res) {

    let { name, email, password } = req.body
    const isExist = await prisma.user.findFirst({
        where: {
            email: email
        }
    })



    if (isExist) {
        return res.status(400).json({
            status: 'error',
            message: 'Email already exist!!',
        })
    }

    password = await bcrypt.hash(password, 10)


    const data = await prisma.user.create({
        data: {
            email, password, name
        }
    })

    return res.status(200).json({
        status: "OK",
        data
    })




}

async function login(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            status: 'error',
            message: 'Login Failed',
        })
    }

    const user = await prisma.user.findFirst({
        where: { email }
    })

    const compared = await bcrypt.compare(password, user.password)

    if (!compared || !user) {
        return res.status(400).json({
            status: 'error',
            message: 'Login Failed',
        })
    }

    user.token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: 60 * 2 })

    return res.status(200).json({
        status: 'OK',
        message: 'Login sUCCESFULLY',
        data: user,
    })



}

module.exports = { register, login }