import { CustomResponse } from 'src/app/core/custom-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private readonly apiUrl = 'http://localhost:8080/phone';
  constructor(protected http: HttpClient) { }

  public getAllPhonesList(): Observable<CustomResponse> {
    return <Observable<CustomResponse>>this.http.get<CustomResponse>(this.apiUrl + "/list");
  }

  public getBrandPhones(): Observable<CustomResponse> {
    return <Observable<CustomResponse>>this.http.get<CustomResponse>(this.apiUrl + "/findByBrand");
  }

  public getIdPhone(): Observable<CustomResponse> {
    return <Observable<CustomResponse>>this.http.get<CustomResponse>(this.apiUrl + "/findById");
  }

}
