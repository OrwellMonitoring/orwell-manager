import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from './model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  path = environment.base_uri + "/images"

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    console.log(this.path);
    return this.http.get<Image[]>(this.path);
  }
} 
