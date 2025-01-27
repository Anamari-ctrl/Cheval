import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedingScheduleService {
  private apiUrl = `${environment.apiUrl}/horses`;

  constructor(private http: HttpClient) {}

  getFeedingSchedules(horseId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${horseId}/feeding-schedules`);
  }

  addFeedingSchedule(horseId: number, schedule: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${horseId}/feeding-schedules`, schedule);
  }

  updateFeedingSchedule(scheduleId: number, schedule: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/feeding-schedules/${scheduleId}`, schedule);
  }

  deleteFeedingSchedule(scheduleId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/feeding-schedules/${scheduleId}`);
  }
}
