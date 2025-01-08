import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateHorseComponent } from './add-update-horse.component';

describe('AddUpdateHorseComponent', () => {
  let component: AddUpdateHorseComponent;
  let fixture: ComponentFixture<AddUpdateHorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdateHorseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
