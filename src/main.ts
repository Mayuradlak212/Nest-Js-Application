import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';
function globalMiddlewareOne(request:Request, response:Response, next:NextFunction) {
  console.log("Global Middleware One");
  next()
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareOne);
  await app.listen(process.env.PORT ?? 3000);
}



bootstrap();
