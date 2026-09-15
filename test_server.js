import express from "express"
import moment from "moment"

const app = express()
const HOST = '127.0.0.1'
const PORT = 8001

const products = [
    {
        id: 0,
        name: "Dont Starve Together",
        price: 200,
        category: "game"
    },
    {
        id: 1,
        name: "Stardew Valley",
        price: 150,
        category: "game"
    },
    {
        id: 2,
        name: "Hollow Knight",
        price: 50,
        category: "game"
    },
    {
        id: 3,
        name: "The Binding of Isaac",
        price: 300,
        category: "game"
    },
    {
        id: 4,
        name: "Google Chrome",
        price: 25,
        category: "program"
    },
    {
        id: 5,
        name: "Telegram",
        price: 25,
        category: "program"
    },
    {
        id: 6,
        name: "VS Code",
        price: 25,
        category: "program"
    }
]

app.get('/timestamp' , (req, res) => {
    res.status(200).json({
        current_time: moment().format('YYYY-MM-DD HH:mm:ss')
    })
})

app.get('/health', (req, res) => {
    res.status(200).json({
        status: "ok"
    })
})

app.get('/products', (req, res) => {
    const {take, category} = req.query

    if (!take && !category) {
        return res.status(200).json(products)
    }

    const takeNum = Number(take)
    const resultProductsArray = [...products]

    if (category) {
        resultProductsArray = resultProductsArray.filter(product => product.category == category)
    }

    if (!take) {
        return res.status(200).json(resultProductsArray)
    }
    
    
    if (!Number.isInteger(takeNum) || takeNum <= 0) {
        return res.status(400).json({
            message: "not valid take number"
        })
    }

    const takeProductsArray = resultProductsArray.slice(0, takeNum)
    
    res.status(200).json(takeProductsArray)
    return
})

app.get('/products/:id', (req, res) => {
    const {id} = req.params
    const idNum = Number(id)
    
    if (!Number.isInteger(idNum) || idNum < 0) {
        return res.status(400).json({
            message: "not valid id"
        })
    }

    const getProduct = products.filter(product => product.id === idNum)

    if (!getProduct.length) {
        return res.status(404).json({
            message: "product not found"
        })
    }

    res.status(200).json(getProduct)
    return
})

app.get('/stats', (req, res) => {
    res.status(200).json({
        uptime: Math.floor(process.uptime()),
        nodeVersion: process.version,
        timestamp: new Date().toISOString()

    })
})


app.listen(PORT, HOST, () => {
    console.log(`Start server ${HOST}:${PORT}`)
})
