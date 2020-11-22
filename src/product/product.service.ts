import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { IProduct } from "./interfaces/product.interface";
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
   constructor(@InjectModel('Product') private ProductModel: Model<IProduct>) {

   }
   //obtener productos
   async getProducts(): Promise<IProduct[]> {
      const products = await this.ProductModel.find()
      return products;
   }
   //obtener producto
   async getProduct(id: string): Promise<IProduct> {
      const product = await this.ProductModel.findById(id);
      return product;
   }
   //guardar producto
   async createProduct(createProductDto: CreateProductDto): Promise<IProduct> {
      //El objeto es instanciado 
      const product = new this.ProductModel(createProductDto);
      //guardamos el producto en nuestra base de datos
      return await product.save();
   }
   //eliminar producto
   async deleteProduct(id: string): Promise<IProduct> {
      const deletedProduct = await this.ProductModel.findByIdAndDelete(id);
      return deletedProduct;
   }
   //actualizar producto
   async updateProduct(id: string, createProductDto: CreateProductDto): Promise<IProduct> {

      const updateProduct = await this.ProductModel.findByIdAndUpdate(id, createProductDto, {
         new: true
      });
      return updateProduct;
   }
}
