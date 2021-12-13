import { StreamSubscription } from '@eventstore/db-client';
import { Injectable } from '@nestjs/common';
import { subscribe } from './event-store';

@Injectable()
export class AppService {
  subscribtion(): StreamSubscription {
    return subscribe();
  }
}
