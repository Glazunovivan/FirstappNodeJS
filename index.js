import express from 'express'
import path from 'path'


const __dirname = path.resolve()
const app = express()
const PORT = 3000

app.listen(PORT, ()=>{
    console.log('Сервер запустился и компуктер готов к майнингу :)')
})

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'view', 'index.html'))
})

app.get('/about', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'view', 'about.html'))
})

app.get('/store', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'view', 'store.html'))
})