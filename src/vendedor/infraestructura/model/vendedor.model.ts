import { DataType, Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'vendedor',
    timestamps: false
})

class modelVendedor extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true
    }) public id !: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    }) public name !: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    }) public lastName !: string;
    
} export default modelVendedor;