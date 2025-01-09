import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = 'http://localhost:3000/schedules'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getSchedules(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, schedule);
  }

  updateSchedule(id: string, schedule: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, schedule);
  }

  deleteSchedule(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
