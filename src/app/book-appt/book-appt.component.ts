import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-appt',
  templateUrl: './book-appt.component.html',
  styleUrls: ['./book-appt.component.css'],
})
export class BookApptComponent implements OnInit {
  service_id: any;
  isSubmitted = false;
  treatment_name: any = {}
  public bookApptForm!: FormGroup;
  baseUrl: any = 'http://api.gurdevhospital.co/';
  res: any
  service:any
  constructor(private route: ActivatedRoute, private router: Router, public http: HttpClient) {
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
    this.getServiceList()
    this.serviceForm()
  
  }
  serviceForm() {
    let MOBILE_PATTERN = /[0-9\+\-\ ]/;
    this.bookApptForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
      ]),
      date: new FormControl(new Date()),
      email: new FormControl('', [Validators.email]),
      address: new FormControl('', [Validators.maxLength(100)]),
      services: new FormControl(this.service_id, [Validators.required]),
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
  getServiceList() {
    this.http.get<any>(this.baseUrl + 'api/get_services').subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.treatment_name = this.res;
        console.log('treatment_name', this.treatment_name);
      },
      error: (err: any) => {
        console.log('failed with the errors', err.error);
        if (err.error) {
          // this.toster.error(err.error.message);
        } else {
          // this.toster.error('Something went wrong');
        }
      },
      complete: () => { },
    });
  }
}
