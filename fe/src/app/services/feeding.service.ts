import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedingService {
  private apiUrl = `${environment.apiUrl}/feedings`; // Base API URL for feeding-related endpoints

  constructor(private http: HttpClient) {}

  /**
   * Fetch feeding schedule for a specific horse.
   * @param horseId - ID of the horse
   */
  getFeedings(horseId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/horse/${horseId}`);
  }

  /**
   * Add a new feeding entry.
   * @param feeding - Feeding data to add
   */
  addFeeding(feeding: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, feeding);
  }

  /**
   * Update an existing feeding entry.
   * @param feedingId - ID of the feeding entry to update
   * @param feeding - Updated feeding data
   */
  updateFeeding(feedingId: number, feeding: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${feedingId}`, feeding);
  }

  /**
   * Delete a feeding entry.
   * @param feedingId - ID of the feeding entry to delete
   */
  deleteFeeding(feedingId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${feedingId}`);
  }
}
