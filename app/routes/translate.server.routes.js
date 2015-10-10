'use strict';

var users = require('../../app/controllers/users.server.controller'),
	translate = require('../../app/controllers/translate.server.controller'),
	passport = require('passport');

module.exports = function(app){

	app.route('/admin')
		.get(users.requiresLogin, translate.readAdmin)
		.put(users.requiresLogin, translate.update);

  app.route('/api/translate/:lang')
      //.get(users.requiresLogin, translate.list)
      .get(users.requiresLogin, translate.read);

      app.param('lang', translate.list);
};
