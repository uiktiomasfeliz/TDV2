'use strict';

var mongoose =  require('mongoose'),
    Translate = mongoose.model('Translate'),
      passport = require('passport');


// Crear un nuevo método controller para el manejo de errores
var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Error de servidor desconocido';
	}
};


// Crear un nuevo método controller que devuelve un artículo existente
exports.read = function(req, res) {
	res.json(req.translate);
};

// Crear un nuevo método controller que devuelve un artículo existente
exports.readAdmin = function(req, res) {
  if(req.status == 401){
    req.redirect('/login');
  }else{
    res.render('admin', {
  		title: 'Admin',
  		translate: JSON.stringify(req.translate)
  	});
  }
};

// Crear un nuevo método controller que recupera una lista de artículos
exports.list = function(req, res, next, lang) {
	// Usar el método model 'find' para obtener una lista de artículos
  if(!lang || lang == undefined){
    lang = "es_ES";
  }
  Translate.find({'type' : lang}, function(err, translate){
    if (err) {
			// Si un error ocurre enviar un mensaje de error
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Enviar una representación JSON del artículo
			//res.json(translate);
      req.translate = translate;

  		// Llamar al siguiente middleware
  		next();
		}
  });
};

// Crear un nuevo método controller que actualiza un artículo existente
exports.update = function(req, res) {
	// Obtener el artículo usando el objeto 'request'
	var translate = req.translate;

	// Actualizar los campos artículo
	translate.contenido = req.body.contenido;

	// Intentar salvar el artículo actualizado
	translate.save(function(err) {
		if (err) {
			// si ocurre un error enviar el mensaje de error
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Enviar una representación JSON del artículo
			res.json(translate);
		}
	});
};
