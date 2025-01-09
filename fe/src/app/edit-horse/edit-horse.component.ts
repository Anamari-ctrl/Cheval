import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { HorseService } from '../services/horse.service';
import { Horse } from '../models/horse'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-edit-horse',
  templateUrl: './edit-horse.component.html',
  styleUrls: ['./edit-horse.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class EditHorseComponent implements OnInit {
  horseForm: FormGroup;
  horseId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private horseService: HorseService
  ) {
    this.horseForm = this.fb.group({
      name: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]],
      breed: ['', Validators.required],
      owner: ['', Validators.required],
      photoUrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.horseId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.horseId) {
      // this.horseService.getHorseById(this.horseId).subscribe((horse: Horse) => {
        // this.horseForm.patchValue(horse);
      // });
    }
  }

  onSubmit(): void {
    if (this.horseForm.valid && this.horseId) {
      const updatedHorse: Horse = this.horseForm.value;
      
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
