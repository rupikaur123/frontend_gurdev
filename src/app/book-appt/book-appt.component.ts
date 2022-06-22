import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';




@Component({
  selector: 'app-book-appt',
  templateUrl: './book-appt.component.html',
  styleUrls: ['./book-appt.component.css'],
})
export class BookApptComponent implements OnInit {
  service_id: any;
  public myForm!: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.service_id = this.route.snapshot.params['id'];
    console.log('Book_Appointment', this.service_id);
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.pattern(/\s/), Validators.required]),
      email: new FormControl('', [Validators.email]),
      phone:new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]),
      myAddress: new FormControl('', [Validators.maxLength(50)]),
      });
  }
  onSubmit(): void {
    if (this.myForm.invalid) {
      return;
    }
  }
}
