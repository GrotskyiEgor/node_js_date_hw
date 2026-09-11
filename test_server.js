import express from "express"
import moment from "moment"

const app = express()
const HOST = '127.0.0.1'
const PORT = 8001

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
