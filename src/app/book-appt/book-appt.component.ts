import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-appt',
  templateUrl: './book-appt.component.html',
  styleUrls: ['./book-appt.component.css'],
})
export class BookApptComponent implements OnInit {
  service_id: any;
  isSubmitted = false;
  public bookApptForm!: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.service_id = this.route.snapshot.params['id'];
    console.log('Book_Appointment', this.service_id);
  }
  treatment = [
    { value: 'Cardiology', id: '1' },
    { value: 'Oncology', id: '2' },
    { value: 'Neuro Science', id: '3' },
    { value: 'Urology', id: '4' },
  ];

  ngOnInit() {
    let MOBILE_PATTERN = /[0-9\+\-\ ]/;
    this.bookApptForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
      ]),
      date: new FormControl(new Date()),
      email: new FormControl('', [Validators.email]),
      address: new FormControl('', [Validators.maxLength(100)]),
      services: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(MOBILE_PATTERN),
      ]),
    });
  }

  changeTreatment(e: any) {
    this.services?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get services() {
    return this.bookApptForm.get('services');
  }
  hasError(controlName: string, errorName: string) {
    return this.bookApptForm.controls[controlName].hasError(errorName);
  }
  onSubmit(bookApptValue: any) {
    console.log('Submit', this.bookApptForm.value);
    this.isSubmitted = true;
    if (this.bookApptForm.invalid) {
      return;
    }
  }
}
