const app = require('express')()
const db = require('./config/db')
const consing = require('consign')

consing()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(3000, () => {
    console.log('Backend execuntando...')
})





//const bodyParser = require('body-parser')
//app.use(bodyParser.json())
//necessario para utilizar os dados enviado no post via row/json e mostrar novamente ex: req.body.nome)

// faz todo os endpoints terem acesso a essa funçõa e apos isso realiza o metodo http normalmente
// e precisa do next() para poder continuar para o meto http, se não fica parado
/*     app.use(meuJson())
    function meuJson(){
        return (req,res,next) =>  {
            console.log('Antes de tudo: Meu middlewere...')
            next() // necessario para seguir para o proximo end point igual, no caso do app.use isso se revere a todos os endpoints
        }
    }
 */

/*   app.get('/teste/:valor',(req, res,next) => {
      console.log('Func 0')
      next()
  })
*/

/*    app.post('/teste',(req, res,next) => {
       console.log('Func 1')
       res.status(200).send('Meu backend = ' +  req.body.dependentes[0].nome)
   }) 

*/
/* app.post('/teste',(req, res,next) => {
    console.log('Func 1')
    res.status(200).send('Meu backend = ' + JSON.stringify(req.body))
})  
*/

/* app.post('/teste',(req, res,next) => {
    console.log('Func 1')
    res.status(200).send('Meu backend = ' + req.body.nome)
}) 
*/

/* app.get('/teste/:valor',(req, res,next) => {
    console.log('Func 1')
    res.status(200).send('Meu backend = ' + req.query.nome)
    next()

    endpoint http://localhost:3000/teste/ok?nome=eduardo&sobrenome=zanckett
}) */


/* app.get('/teste/:valor',(req, res,next) => {
    console.log('Func 1')
    res.status(200).send('Meu backend = ' + req.params.valor)
    next()


    endpoint http://localhost:3000/teste/:qualquer%20coisa
}) */

/* app.get('/teste/:valor',(req, res,next) => {
    console.log('Func 2')
})

*/
