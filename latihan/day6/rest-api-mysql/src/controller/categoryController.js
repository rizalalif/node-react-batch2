const { PrismaClient } = require("../generated/prisma")

const prisma = new PrismaClient()

async function getCategory(req, res) {
    try {
        const data = await prisma.category.findMany()

        return res.status(200).json({
            status: "OK",
            data
        })
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            status: 'error',
            message: 'Not Found!',
        })
    }
}

module.exports = { getCategory }