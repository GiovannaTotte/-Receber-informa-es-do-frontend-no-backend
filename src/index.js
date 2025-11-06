import express from "express"
import cors from "cors"
import mysql2 from "mysql2"
import { persons } from "./persons.js"

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
    response.json(persons)
})

app.post("/cadastrar", (request, response) => {

    const { user } = request.body
    console.log(user)

    const insertCommand = `
        INSERT INTO marciomarcal_82mb(name, email, password)
        VALUES (?, ?, ?)
    `

    database.query(insertCommand, [user.name, user.email, user.password], (error) => {
        if(error) {
            console.log(error)
            return
        }

        response.status(201).json({ message: "Usuário cadastrado com sucesso!" })
    })
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

const database = mysql2.createPool({
   host: "https://benserverplex.ddns.net",
   database: "backend_marcio",
   user: "alunos",
   password: "senhaAluno",
   connectionLimit: 10
})