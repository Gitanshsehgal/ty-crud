import * as mongoose from 'mongoose';
import { StudentSchema } from '../models/student';
import { Request, Response } from 'express';

const StudentMongooseModel = mongoose.model('Student', StudentSchema);

export class StudentController { 

    public addNewStudent (req: Request, res: Response) {                
        let newStudent = new StudentMongooseModel(req.body);

       newStudent.save((err, data) => {
            if (err){
                res.send(err);
            }    
            res.json(data);
        });
    }

    public getStudents (req: Request, res: Response) {           
        StudentMongooseModel.find({}, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public getStudentById (req: Request, res: Response) {           
        StudentMongooseModel.findById(req.params.studentId, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public updateStudent (req: Request, res: Response) {           
        StudentMongooseModel.findOneAndUpdate({ _id: req.params.studentId }, req.body, { new: true }, 
            (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public deleteStudent (req: Request, res: Response) {           
        StudentMongooseModel.findOneAndRemove({ _id: req.params.studentId }, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted student!'});
        });
    }
}
