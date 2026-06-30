
import {Table,Column,Model,DataType,ForeignKey,BelongsTo,BelongsToMany,HasMany, AllowNull,PrimaryKey} from 'sequelize-typescript';
import { User } from './users.entity';
import { UUIDV1 } from 'sequelize';
import { Course } from './courses.entity';
import { Enroll } from 'common/enum/status.enum';

@Table({
    tableName:'enrollments',
    timestamps:true,
    underscored:true,
})

export class Enrollment extends Model<Enrollment>{

    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: UUIDV1,
    })
    declare id: string

    @Column({
        type: DataType.ENUM(Enroll.ACTIVE,Enroll.COMPLETED,Enroll.EXPELLED),
        allowNull: false,
        defaultValue:Enroll.ACTIVE
    })
    declare status: string

   @ForeignKey(()=>Course)
       @Column({
           type:DataType.UUID
           
       })
       declare course_id:string
   
       @BelongsTo(()=>Course)
       declare course?: Course


       @ForeignKey(()=>User)
       @Column({
           type:DataType.UUID
           
       })
       declare user_id:string
   
       @BelongsTo(()=>User)
       declare user?: User
    
}