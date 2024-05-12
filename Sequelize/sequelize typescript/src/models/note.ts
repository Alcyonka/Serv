import { Table, Column, AllowNull, AutoIncrement, PrimaryKey, Model, Default, DataType, Unique } from 'sequelize-typescript'

@Table({
    timestamps: false,
    tableName: "notes",
})
export default class Note extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.NUMBER)
        id!:number;
    

    @Column(DataType.STRING)
    note!: string;
}