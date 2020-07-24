const express = require('express')
const app = express()
const setupApp = require('./config/setup')

setupApp(app)
app.get('/api/teste', (req, res) => {
  res.send('Aplicação rodando')
})
app.listen(5858, () => console.log('Server Running'))
