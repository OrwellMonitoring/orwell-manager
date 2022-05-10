import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collector } from '../models/collector';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {
  path = "/collectors"

  constructor(private http: HttpClient) { }

  getHosts(): Observable<Collector[]> {
    return this.http.get<Collector[]>(environment.api_url + this.path)
  }

  getAll () {
    return getHosts()
  }
}
