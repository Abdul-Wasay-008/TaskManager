import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from './dto/task.dto';
import { Model } from 'mongoose';
import { Task, TaskDocument } from "./schemas/task.schema";

@Injectable()
export class TasksService {
    constructor(
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
    ) { }

    //Task creation system
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description, dueDate, priority } = createTaskDto;

        const newTask = new this.taskModel({
            title,
            description,
            dueDate,
            priority,
            status: 'pending',
        });

        return newTask.save();
    }

    async getActiveTasks(): Promise<Task[]> {
        const currentDate = new Date();
        return this.taskModel.find({
            dueDate: { $gte: currentDate }, // Find tasks with a due date greater than or equal to today
        }).exec();
    }

    //Task deletion funciton
    async deleteTask(id: string): Promise<void> {
        await this.taskModel.findByIdAndDelete(id).exec();
    }
    
}

