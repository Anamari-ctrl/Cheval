import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  private apiUrl = 'http://localhost:3000/horses'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getHorses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getHorseById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addHorse(horse: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, horse);
  }

  updateHorse(id: string, horse: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, horse);
  }

  deleteHorse(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
