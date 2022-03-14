import { Injectable } from '@nestjs/common';
import { AgendaService } from 'nestjs-agenda';

@Injectable()
export class AppService {
  constructor(private readonly agenda: AgendaService) {}

  getHello(): string {
    // define a job, more details: [Agenda documentation](https://github.com/agenda/agenda)
    this.agenda.define(
      'TEST_JOB',
      { lockLifetime: 10000 },
      this.testJob.bind(this),
    );
    // schedule a job
    this.agenda.schedule('3 seconds from now', 'TEST_JOB', {});
    return 'Hello World!';
  }

  private async testJob(job: any, done: any): Promise<void> {
    console.log('a job');
    await job.remove();
    done();
  }
}
