import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

//app.use('/api/login', login)

app.listen(3000, () => {
    console.log('Server On')
})