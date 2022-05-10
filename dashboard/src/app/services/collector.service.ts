import { Collector } from './../models/collector';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {

  constructor(private httpClient: HttpClient) { }

  getAll () {
    return this.httpClient.get<Collector[]>(environment.api_url + '/collectors')
  }

}
