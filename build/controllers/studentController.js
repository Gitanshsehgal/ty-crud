"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
var mongoose = __importStar(require("mongoose"));
var student_1 = require("../models/student");
var StudentMongooseModel = mongoose.model('Student', student_1.StudentSchema);
var StudentController = /** @class */ (function () {
    function StudentController() {
    }
    StudentController.prototype.addNewStudent = function (req, res) {
        var newStudent = new StudentMongooseModel(req.body);
        newStudent.save(function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    StudentController.prototype.getStudents = function (req, res) {
        StudentMongooseModel.find({}, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    StudentController.prototype.getStudentById = function (req, res) {
        StudentMongooseModel.findById(req.params.studentId, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    StudentController.prototype.updateStudent = function (req, res) {
        StudentMongooseModel.findOneAndUpdate({ _id: req.params.studentId }, req.body, { new: true }, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    };
    StudentController.prototype.deleteStudent = function (req, res) {
        StudentMongooseModel.findOneAndRemove({ _id: req.params.studentId }, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted student!' });
        });
    };
    return StudentController;
}());
exports.StudentController = StudentController;
//# sourceMappingURL=studentController.js.map