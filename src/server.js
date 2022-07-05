const express = require('express')
const userRoutes = require('./routes/user.routes')
const PORT = 3000

// INSTANCIA O EXPRESS NO APP
app = express()

//MIDDLEWARE REQUESTS DO TIPO JSON
app.use(express.json())

//ROTAS
app.use(userRoutes)
//APP RODANDO NA PORTA 3000

//rota localhost:3000
app.get('/', (request, response) => {
  return response.json({
    message: 'Hello world from backend',
    status_code: '200',
    api: 'You can create HTTP requests with INSOMNIA or THUNDER CLIENT,\n and check if everything is working fine before introduce on production'
  })
})

app.listen(PORT, () =>
  console.log('Server is running up htpp:localhost:%d', PORT)
)
