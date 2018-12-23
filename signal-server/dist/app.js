"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var routes_1 = require("./routes/routes");
var App = /** @class */ (function () {
    function App() {
        this.routePrv = new routes_1.Routes();
        this.app = express_1.default();
        this.config();
        this.routePrv.routes(this.app);
    }
    App.prototype.config = function () {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map