import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CustomResponse } from '../core/custom-response';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private readonly apiUrl = 'http://localhost:8080';
  constructor(protected http: HttpClient) { }

  phone$ =<Observable<CustomResponse>>this.http.get<CustomResponse>(this.apiUrl+"/phone/list");
}
