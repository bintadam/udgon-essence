import express from 'express'
import mongoose from 'mongoose'

const PORT = 3000
const app =  express()


mongoose
    .connect(process.env.MONGO)
    .then(()=> console.log('MongoDB is connected'))
    .catch(error=>console.log(error))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})