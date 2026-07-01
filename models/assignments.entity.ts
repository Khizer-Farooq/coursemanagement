
import {Table,Column,Model,DataType,ForeignKey,BelongsTo,BelongsToMany,HasMany, AllowNull,PrimaryKey} from 'sequelize-typescript';
import { User } from './users.entity';
import { UUIDV1 } from 'sequelize';
import { Course } from './courses.entity';
import { Module } from './modules.entity';
import { Submission } from './submissions.entity';


@Table({
    tableName:'assignments',
    timestamps:true,
    underscored:true,
})

export class Assignment extends Model<Assignment>{

    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: UUIDV1,
    })
    declare id: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare title: string

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    declare duedate: Date

   @ForeignKey(()=>Course)
       @Column({
           type:DataType.UUID
           
       })
       declare course_id:string
   
       @BelongsTo(()=>Course)
       declare course?: Course
    
       @BelongsTo(()=>Module)
         declare module?: Module

    @HasMany(()=>Submission)
    declare submissions?: Submission[]
}