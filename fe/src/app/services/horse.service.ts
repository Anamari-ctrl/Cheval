import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  private apiUrl = `${environment.apiUrl}/horses`;

  constructor(private http: HttpClient) {}

  getAllHorses(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getHorseById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createHorse(horse: any): Observable<any> {
    return this.http.post(this.apiUrl, horse);
  }

  updateHorse(id: number, horse: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, horse);
  }

  deleteHorse(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
