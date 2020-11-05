"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
exports.StudentSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    School: {
        type: String,
        required: true
    },
});
//# sourceMappingURL=student.js.map