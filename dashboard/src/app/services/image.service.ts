import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  path = "/images"

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(environment.api_url + this.path)
  }

  deleteImage(id: number) {
    return this.http.delete(environment.api_url + this.path + "/" + id);
  }
}
