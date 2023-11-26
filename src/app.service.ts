import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): string {
    return 'Health method implemented.';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
