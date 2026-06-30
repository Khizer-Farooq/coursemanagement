
import {Table,Column,Model,DataType,ForeignKey,BelongsTo,BelongsToMany,HasMany, AllowNull,PrimaryKey} from 'sequelize-typescript';
import { User } from './users.entity';
import { UUIDV1 } from 'sequelize';
import { Assignment } from './assignments.entity';
import { Status } from 'common/enum/submission.enum';
import { defaultValueSchemable } from 'sequelize/lib/utils';

@Table({
    tableName:'submissions',
    timestamps:true,
    underscored:true,
})

export class Submission extends Model<Submission>{

    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: UUIDV1,
    })
    declare id: string

    @Column({
        type: DataType.ENUM(Status.Pending,Status.SUBMITTED),
        allowNull: false,
        defaultValue:Status.Pending
    })
    declare status: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare marks: number

   @ForeignKey(()=>Assignment)
       @Column({
           type:DataType.UUID
           
       })
       declare assignment_id:string
   
       @BelongsTo(()=>Assignment)
       declare assignment?: Assignment

       @ForeignKey(()=>User)
       @Column({
           type:DataType.UUID
           
       })
       declare user_id:string
   
       @BelongsTo(()=>User)
       declare user?: User
    
}