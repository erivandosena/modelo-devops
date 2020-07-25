//bibliotecas utilizadas no projeto 
const express = require("express");
const bodyParser = require('body-parser')

//porta utilizada por nossa aplicação
let port = process.env.PORT || 3000;


//instância da biblioteca express
var app = express();

//configuração das respostas como json
app.use(bodyParser.json());

//inicialização da api
if (require.main === module){    
	app.listen(port);
	console.log("API disponível em localhost:3000")    
}


//endpoint /juntar acessível por meio de chamada get
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