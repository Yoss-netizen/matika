import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ---> GANTI app.enableCors() DENGAN OPSI INI <---
  app.enableCors({
    origin: [
        'http://127.0.0.1:5500', // Izin untuk Live Server VS Code
        'http://localhost:5501', // Contoh port lain untuk development
        'https://pintarmatika.com', // Izin untuk domain production Anda
        'https://www.pintarmatika.com'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
