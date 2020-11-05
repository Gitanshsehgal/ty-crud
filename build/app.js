"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = require("./routes");
var mongoose_1 = __importDefault(require("mongoose"));
var App = /** @class */ (function () {
    function App() {
        this.route = new routes_1.Routes();
        this.app = express_1.default();
        this.config();
        this.route.routes(this.app);
        this.mongoSetup();
    }
    App.prototype.config = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    App.prototype.mongoSetup = function () {
        mongoose_1.default.connect('mongodb://localhost:27017/school', {})
            .then(function () { return console.log('connection successful'); })
            .catch(function (err) { return console.error(err); });
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map