module.exports = function(app) {
	var contatos = app.controllers.contatos,
		autenticar = require('./../middlewares/autenticador');

	app.get('/contatos', autenticar, contatos.index);
	app.get('/contato/:id', autenticar, contatos.show);
	app.get('/contato/editar/:id', autenticar, contatos.edit);
	app.post('/contato', autenticar, contatos.create);
	app.put('/contato/:id', autenticar, contatos.update);
	app.delete('/contato/:id', autenticar, contatos.destroy);
};