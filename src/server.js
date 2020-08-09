//Dados

const proffys = [
    {name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "986743225", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220]
    },

    {name: "Daniele Evangelista", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "986743225", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220]
    },

    {name: "Gabriela Menezes", 
    avatar: "https://avatars3.githubusercontent.com/u/64161478?s=460&u=1356f8b491eecccaeb9afb16c34beb8a00c75cf3&v=4", 
    whatsapp: "71993355025", 
    bio: "Aluna de graduação em Sistemas de Informação (UNA). Entusiasta do desenvolvimento e professora nas horas vagas",
    subject: "História",
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220]
    },

    {name: "Wendel Marques",
    avatar: "https://avatars3.githubusercontent.com/u/6981085?s=460&u=ec7deccab13b9f8d3ca515f2374014f9127abb6a&v=4",
    whatsapp: "62992542372",
    bio: "Aluno de graduação em Ciência da Computação (UFG). Idealizador do Vestgeek (vestgeek.com). Data Scientist e professor nas horas vagas",
    subject: "Matemática",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
    },
    
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html", {subjects, weekdays})
}
// pegar uma dependência que está no projeto
const express = require('express')
const server = express()


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, // cache é guardar em memória
})
// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))


// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)