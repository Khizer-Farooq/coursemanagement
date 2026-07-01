
import {Table,Column,Model,DataType,ForeignKey,BelongsTo,PrimaryKey,HasMany} from 'sequelize-typescript';
import { UUIDV1 } from 'sequelize';
import { Course } from './courses.entity';
import { Assignment } from './assignments.entity';

@Table({
    tableName:'modules',
    timestamps:true,
    underscored:true,
})

export class Module extends Model<Module>{
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
  declare module_name: string

  @Column({
      type: DataType.INTEGER,
      allowNull: true,
  })
  declare order?: number

    @ForeignKey(()=>Course)
    @Column({
        type:DataType.UUID
        
    })
    declare course_id:string

    @BelongsTo(()=>Course)
    declare course?: Course

    @HasMany(()=>Assignment)
    declare assignments?: Assignment[]
    
}
