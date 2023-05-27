import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lawn } from '../models/Lawn';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LawnService {

  private baseUrl = 'http://localhost:3000/lawns';

  constructor(private httpClient: HttpClient) { }

  public getAllLawn(): Observable<Lawn[]> {
    const url = `${this.baseUrl}/`;
    return this.httpClient.get<Lawn[]>(url);
  }

  public getLawn(id: String): Observable<Lawn> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Lawn>(url);
  }

  public addLawn(newLawn: Lawn): Observable<Lawn> {
    const url = `${this.baseUrl}/`;
    return this.httpClient.post<Lawn>(url, newLawn);
  }

  public updateLawn(lawn: Lawn): Observable<Lawn> {
    const url = `${this.baseUrl}/${lawn._id}`;
    return this.httpClient.put<Lawn>(url, lawn);
  }

  public deleteLawn(lawn: Lawn) {
    const url = `${this.baseUrl}/${lawn._id}`;
    return this.httpClient.delete(lawn._id);
  }
}
