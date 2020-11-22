import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ProductModule,
    //Conexion a MongoDB
    MongooseModule.forRoot('mongodb://localhost/products-nest-crud', {
      useNewUrlParser: true,
      useFindAndModify: false
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
