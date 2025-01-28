import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feeding-schedule',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule, FormsModule], 
  templateUrl: './feeding-schedule.component.html',
  styleUrls: ['./feeding-schedule.component.css']
})
export class FeedingScheduleComponent {
  feedingForm: FormGroup;
  feedings: { time: string; quantity: number; feedType: string }[] = [];
  
  feedTypes: string[] = ['Oats', 'Vitamins', 'Hay', 'Special Medications']; 

  constructor(private fb: FormBuilder) {
    this.feedingForm = this.fb.group({
      time: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0.1)]],
      feedType: ['', Validators.required] 
    });
  }

  addFeeding(): void {
    if (this.feedingForm.valid) {
      this.feedings.push(this.feedingForm.value);
      this.feedingForm.reset();
    }
  }

  removeFeeding(index: number): void {
    this.feedings.splice(index, 1);
  }

  editFeeding(index: number): void {
    const feeding = this.feedings[index];
    this.feedingForm.setValue({
      time: feeding.time,
      quantity: feeding.quantity,
      feedType: feeding.feedType 
    });
    this.feedings.splice(index, 1);
  }
}
