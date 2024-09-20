import { Body, Controller, Post, Request, Get, Delete, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';
import { Task } from './schemas/task.schema';

@Controller('tasks')
export class TasksController {
    constructor(private tasksSerivce: TasksService) { }

    @Post()
    async createTasks(@Body() createTaskDto: CreateTaskDto, @Request() req) {
        return this.tasksSerivce.createTask(createTaskDto)
    }

    @Get('/active')
    async getActiveTasks(): Promise<Task[]> {
        return this.tasksSerivce.getActiveTasks();
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string): Promise<void> {
        return this.tasksSerivce.deleteTask(id); 
    }

}
