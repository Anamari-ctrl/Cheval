import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horse } from '../models/horse'; 

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  private apiUrl = 'http://localhost:3000/api/horses';

  constructor(private http: HttpClient) {}

  getHorseById(id: number): Observable<Horse> {
    console.log(this.http);
    console.log(this.apiUrl);
    console.log(id);
    
    // return this.http.get<Horse>(`${this.apiUrl}/${id}`);
    return new Observable<Horse>();
  }

  updateHorse(id: number, horse: Horse): Observable<Horse> {
    return new Observable<Horse>();
    // return this.htt<p.put<Horse>(`${this.apiUrl}/${id}`, horse);
  }
}
