// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { Document } from "mongoose";

// export type TaskDocument = Task & Document;

// @Schema()
// export class Task {
//     @Prop({ required: true })
//     title: string;

//     @Prop()
//     description: string;

//     @Prop({ default: new Date() })
//     createdAt: Date;

//     @Prop({ required: true })
//     dueDate: Date;

//     @Prop({ default: 'pending' })
//     status: string;
// }

// export const TaskSchema = SchemaFactory.createForClass(Task);
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ default: new Date() })
    createdAt: Date;

    @Prop({ required: true })
    dueDate: Date;

    @Prop({ required: true })
    priority: string

    @Prop({ default: 'pending' })
    status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);