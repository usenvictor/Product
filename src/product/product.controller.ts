import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { productDto } from './dto/prouct.dto';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}

    @Post()
    async postProduct(@Body()payload:productDto){
        return await this.productService.createProduct(payload)
    }

    @Get('getall')
    async getAllProduct(){
        return await this.productService.getAll()
    }
    @Get('/find/:id')

    async findById(@Param('id')id){
     return await this.productService.findOneById(id)
    }
    
    @Put('/update/:id')
    @HttpCode(201)
    async updateItem(@Param('id')id, @Body()payload){
        return await this.productService.updateProduct(id,payload)
    }
   
      
    @Delete('/delete/:id')
    @HttpCode(200)
    async deleteItem(@Param('id')id,){
        return await this.productService.deleteProduct(id)
    }
   

}
