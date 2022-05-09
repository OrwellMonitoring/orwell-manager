import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Host } from 'src/app/models/host';

@Injectable({
  providedIn: 'root'
})
export class HostService {
  path = "/hosts"

  constructor(private http: HttpClient) { }

  getHosts(): Observable<Host[]> {
    return this.http.get<Host[]>(environment.api_url + this.path)
  }
}
