import { IsNotEmpty, IsString } from "class-validator";

export class productDto{
     @IsNotEmpty()
     @IsString()
    name: string;
    
    @IsNotEmpty({message:'we noo want this field to dey empty'})
    @IsString()
    brand: string;

    @IsNotEmpty()
    @IsString()
    price: string;

    @IsNotEmpty()
    @IsString()
    color: string;
    
}