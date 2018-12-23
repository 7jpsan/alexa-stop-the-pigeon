"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app) {
        app.route('/')
            .get(function (req, res) {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        // Contact 
        app.route('/contact')
            // GET endpoint 
            .get(function (req, res) {
            // Get all contacts            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        })
            // POST endpoint
            .post(function (req, res) {
            // Create new contact         
            res.status(200).send({
                message: 'POST request successfulll!!!!'
            });
        });
        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get(function (req, res) {
            // Get a single contact detail            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        })
            .put(function (req, res) {
            // Update a contact           
            res.status(200).send({
                message: 'PUT request successfulll!!!!'
            });
        })
            .delete(function (req, res) {
            // Delete a contact     
            res.status(200).send({
                message: 'DELETE request successfulll!!!!'
            });
        });
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map