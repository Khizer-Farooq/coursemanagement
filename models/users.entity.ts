import {Table,Column,Model,DataType,ForeignKey,BelongsTo,BelongsToMany,HasMany, AllowNull, PrimaryKey,} from 'sequelize-typescript';
import { Role } from 'common/enum/role.enum';

@Table({
    tableName:'users',
    timestamps:true,
    underscored:true,
})

export class User extends Model<User>{

    @PrimaryKey
    @Column({
        type:DataType.UUID,
    })
    declare id: string

    @Column({
        type:DataType.STRING,
        allowNull:false,

    })
    declare name:string

    @Column({
        type: DataType.STRING(150),
        allowNull: false,
        unique: true,
        validate:{
            isEmail:true
        }
    })
    declare email:string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        
    })
    declare password:string

    @Column({
        type: DataType.ENUM(Role.INSTRUCTOR, Role.STUDENT),
        allowNull: false,
        defaultValue: Role.STUDENT,
    })
    declare role:Role
}