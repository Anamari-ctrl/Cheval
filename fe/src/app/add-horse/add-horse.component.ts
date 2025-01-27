import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HorseService } from '../services/horse.service';

@Component({
  selector: 'app-add-horse',
  templateUrl: './add-horse.component.html',
  styleUrls: ['./add-horse.component.css']
})
export class AddHorseComponent {
  horseForm: FormGroup;

  constructor(private fb: FormBuilder, private horseService: HorseService) {
    this.horseForm = this.fb.group({
      name: [''],
      age: [0],
      breed: [''],
      owner: [''],
      photo_url: ['']
    });
  }

  onSubmit(): void {
    this.horseService.createHorse(this.horseForm.value).subscribe(() => {
      alert('Horse added successfully!');
    });
  }
}
