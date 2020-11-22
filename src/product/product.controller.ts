import { Controller, Get, Post, Res, HttpStatus, Body, Delete, Param, NotFoundException, Query, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { ProductService } from "./product.service";
@Controller('product')
export class ProductController {

   constructor(private productService: ProductService) {

   }
   //obtener productos
   @Get()
   async getProducts(@Res() res) {
      const products = await this.productService.getProducts();
      return res.status(HttpStatus.OK).json(products);
   }
   //obtener producto
   @Get(':id')
   async getProduct(@Param('id') id: string, @Res() res) {
      const product = await this.productService.getProduct(id)
      if (!product) {
         throw new NotFoundException('Producto no encontrado')
      }
      return res.status(HttpStatus.OK).json(product)
   }
   //crear producto
   @Post('/create')
   async createProduct(@Res() res, @Body() createProductDto: CreateProductDto) {
      const product = await this.productService.createProduct(createProductDto)
      return res.status(HttpStatus.OK).json({
         message: 'Producto satisfactoriamente creado',
         product: product
      });
   }
   @Delete(':id')
   async deleteProduct(@Param('id') id, @Res() res) {
      const delProduct = await this.productService.deleteProduct(id);
      if (!delProduct) {
         throw new NotFoundException('Producto no encontrado, no se ha podido eliminar')
      }
      return res.status(HttpStatus.OK).json({
         message: "Producto eliminado satisfactoriamente",
         delProduct
      })
   }
   @Put(':id')
   async ipdateProduct(@Param('id') id, @Body() createProductDto: CreateProductDto, @Res() res) {
      const updateProduct = await this.productService.updateProduct(id, createProductDto);
      if (!updateProduct) {
         throw new NotFoundException('Producto no encontrado, no se ha podido eliminar')
      }
      return res.status(HttpStatus.OK).json({
         message: "Producto actualizado satisfactoriamente",
         updateProduct
      })
   }
}
