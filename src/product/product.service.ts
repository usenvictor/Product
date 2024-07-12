import { HttpException, Injectable } from '@nestjs/common';
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

    async findOneById(id){
       return await this.findItem(id)
    }

    async updateProduct(id, payload){
         await this.findItem(id)

         await this.productRepository.update(id,payload)
         return{
            statusCode: 201,
            message: 'Product updated successfully'
         }
    
    }

    async deleteProduct(id){
        await this.findItem(id);

        await this.productRepository.delete(id);
        return{
            statusCode: 200,
            message: 'Product deleted successfully'
         }
    }

    async findItem(id){
        const find = await this.productRepository.findOneBy({id});
        if(!find) {
            throw new HttpException(`sorry no such id found`,400)
        }
            return find;
    }
}
