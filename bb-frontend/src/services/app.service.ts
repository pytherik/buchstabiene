import type { RestService } from '@/services/rest.service';
import type { InjectionKey } from 'vue';

export class AppService {
  constructor(private restService: RestService) {}

  async getForRessource(path: string): Promise<string> {
    return await this.restService.getForRessource(path, 'GET');
  }
}

export const AppServiceKey: InjectionKey<AppService> = Symbol('AppService');
