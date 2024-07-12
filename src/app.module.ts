import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product/entity/product.entity';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
 imports: [
  ConfigModule.forRoot({
    isGlobal: true
  }),
  ProductModule,
  DatabaseModule,
 ],
 controllers:[],
 providers:[],
})
export class AppModule {}
