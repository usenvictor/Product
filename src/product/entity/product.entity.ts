import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: `saleproduct`})
export class ProductEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    brand: string;

    @Column()
    price: string;

    @Column()
    color: string;

    @CreateDateColumn()
    createDate: Date

}