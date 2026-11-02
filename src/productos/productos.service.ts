import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
  getHello(): string {
    return this.hello();
  }

  private hello(): string {
    return 'Hola mundo desde productos ';
  }
}
