
// pegar uma dependência que está no projeto
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, // cache é guardar em memória
})
// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
// receber os dados do req.body
.use(express.urlencoded({ extended: true}))

// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)