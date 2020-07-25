//bibliotecas utilizadas no projeto 
var express = require("express");
const bodyParser = require('body-parser')

//porta utilizada por nossa aplicação
const port = 3000;

var app = express();
app.use(bodyParser.json());


if (require.main === module){
    //inicia o servidor
	app.listen(port);
	console.log("API disponível em localhost:3000")    
}


app.get("/juntar", (req, res, next) => {	

	let p1 = req.query.palavra1;
	let p2 = req.query.palavra2;
	let retorno = {};

	if (p1=='banana'){		
		retorno.resultado = "Não gosto de banana";
		
	} else {
		retorno.resultado = p1 + p2;			
	}

	res.send(retorno);
 
});

//permite que outros scripts acessem o recurso app
module.exports = app;