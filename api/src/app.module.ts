import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SSEMiddleware } from "nestjs-sse";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SSEMiddleware)
      .forRoutes('/stream')
  }
}
