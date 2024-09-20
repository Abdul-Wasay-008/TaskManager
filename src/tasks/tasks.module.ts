import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './schemas/task.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || '#271*AzopQ$%lL$5',
      signOptions: { expiresIn: '1h' },
    }),
    MongooseModule.forFeature([
      { name: Task.name, schema: TaskSchema },
  ]),
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
