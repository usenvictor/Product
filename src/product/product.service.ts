import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(ProductEntity) private productRepository:Repository<ProductEntity>){}

    async createProduct(payload){
        return this.productRepository.save(payload)
    }


    async getAll(){
        return await this.productRepository.find()
    }
}
