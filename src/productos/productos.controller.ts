import { Controller, Get } from '@nestjs/common';
import { ProductosService } from './productos.service.js';

@Controller('producto')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  getHello(): string {
    return this.productosService.getHello();
  }
}
