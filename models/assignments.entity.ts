
import {Table,Column,Model,DataType,ForeignKey,BelongsTo,BelongsToMany,HasMany, AllowNull,PrimaryKey} from 'sequelize-typescript';
import { User } from './users.entity';
import { UUIDV1 } from 'sequelize';
import { Course } from './courses.entity';

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
    
}