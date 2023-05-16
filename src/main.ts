import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import * as fs from "fs";

async function bootstrap() {

     // const httpsOptions = {
     //     key: fs.readFileSync(`${process.env.SSL_PRIVATE_KEY_FILE}`),
     //     cert: fs.readFileSync(`${process.env.SSL_FULL_CHAIN_FILE}`),
     // };
     //
     //  // const app = await NestFactory.create(AppModule, { httpsOptions });
     //   const app = await NestFactory.create(AppModule, { httpsOptions, cors: {
     //       credentials: true,
     //       origin: [
     //         `${process.env.FRONTEND_APP_URL}:3000`,
     //         `${process.env.FRONTEND_APP_URL}:3001`
     //       ],
     //     }, });

      // const app = await NestFactory.create(AppModule, { httpsOptions });
      const app = await NestFactory.create(AppModule, { cors: {
         credentials: true,
         origin: [
          `${process.env.FRONTEND_APP_URL}:3000`,
          `${process.env.FRONTEND_APP_URL}:3001`
         ],
        }, });


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
