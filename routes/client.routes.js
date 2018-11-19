var homeController = require('../controllers/home.controller')

module.exports = function( app ){
    app.get('/',homeController.getHomePage );
}