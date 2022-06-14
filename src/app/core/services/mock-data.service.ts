
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiAbstractionService } from './api-abstraction.service';

import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService extends ApiAbstractionService {

  mockData: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);

  constructor(
    public http: HttpClient
  ) {
    super();
  }

  getMockData = async (): Promise<void> => {
    const key: string = 'get-mock-data';
    const url: string = this.getApiAddress(key);

    try {
      const apiCall$ = this.http.get<Array<any>>(url);
      const data: Array<any> = await lastValueFrom(apiCall$);
      this.mockData.next(data);
    } catch (error) {
      console.log(error);
    }
  };

}
