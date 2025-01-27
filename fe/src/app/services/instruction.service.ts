import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  private apiUrl = `${environment.apiUrl}/horses`;

  constructor(private http: HttpClient) {}

  getInstructions(horseId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${horseId}/instructions`);
  }

  addInstruction(horseId: number, instruction: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${horseId}/instructions`, instruction);
  }

  updateInstruction(instructionId: number, instruction: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/instructions/${instructionId}`, instruction);
  }

  deleteInstruction(instructionId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/instructions/${instructionId}`);
  }
}
