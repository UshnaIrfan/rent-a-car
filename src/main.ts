import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import cors from "cors-ts";

async function bootstrap() {
     // const app = await NestFactory.create(AppModule, { cors: {
     //     credentials: true,
     //     origin: [
     //       'http://localhost:3000'
     //     ],
     //   }, });
       const app = await NestFactory.create(AppModule, { cors: true });
       //  app.enableCors();
  //     app.use(cors({
  //     origin: ['http://localhost:3000'],
  //     methods: 'GET,PUT,POST,DELETE',
  //     preflightContinue: false,
  //    optionsSuccessStatus: 204,
  //    credentials: true,
  // }));

       app.enableCors({
       allowedHeaders: '*',
       origin: '*',
       credentials: true,
     });


       app.use(bodyParser.json({ limit: '50mb' }));
       app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

      //Swagger connection
       const config = new DocumentBuilder()
      .setTitle('love2Air')
      .setDescription('love2Air backend')
      .setVersion('1.0')
      .addTag('love2Air')
      .addBearerAuth({ in: 'header', type: 'http' })
      .build();
      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('api', app, document);

     // Server Connection
      const port = process.env.PORT || 3000;
      await app.listen(port, async () => {
      console.log(
      `The server is running on ${port} port: http://localhost:${port}/api`,
        );
  });
}
bootstrap();
