
import {Table,Column,Model,DataType,ForeignKey,BelongsTo,BelongsToMany,HasMany, AllowNull,PrimaryKey} from 'sequelize-typescript';
import { User } from './users.entity';
import { type NonAttribute,type CreationOptional,type InferAttributes,type InferCreationAttributes, UUID, UUIDV1 } from 'sequelize';
import { Module } from './modules.entity';
import {Enrollment} from './enrollments.entity';
@Table({
    tableName:'courses',
    timestamps:true,
    underscored:true,
})

export class Course extends Model<InferAttributes<Course>,InferCreationAttributes<Course>>{

    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue:UUIDV1
    })
    declare id:CreationOptional<string>

    @Column({
        type:DataType.STRING,
        allowNull:false,

    })
    declare title:string

    @Column({
        type:DataType.STRING,
        allowNull:true,

    })
    declare description?:string

    @ForeignKey(()=>User)
    @Column({
        type:DataType.UUID
        
    })
    declare user_id:string

    @BelongsTo(()=>User)
    declare user?: NonAttribute<User>
    
    @HasMany(()=>Module)
    declare modules?: NonAttribute<Module[]>

    @BelongsToMany(()=>User,()=>Enrollment)
    declare enrolledUsers?: NonAttribute<User[]>
}