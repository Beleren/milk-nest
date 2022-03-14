import { Module } from '@nestjs/common';
import { AgendaModule } from 'nestjs-agenda';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AgendaModule.register({
      db: { address: 'mongodb://127.0.0.1/agenda' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
