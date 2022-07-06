import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  isSubmitted = false;
  public bookApptForm!: FormGroup;
  staticList: any = []
  res: any;
  treatment_name:any=[]
  baseUrl: any = 'http://api.gurdevhospital.co/';
  constructor(private route: ActivatedRoute, private router: Router, public http: HttpClient) { }
  treatment = [
    { value: 'Cardiology', id: '1' },
    { value: 'Oncology', id: '2' },
    { value: 'Neuro Science', id: '3' },
    { value: 'Urology', id: '4' },
  ];
  ngOnInit(): void {
    this.getServiceList();
    this.getStaticList();
    this.bookApptForm = new FormGroup({
      date: new FormControl(new Date()),
      services: new FormControl('', [Validators.required]),
    });
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
      complete: () => {},
    });
  }
  changeTreatment(e: any) {
    this.services?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  getStaticList() {
    this.http.get<any>(this.baseUrl + 'api/static_pages_front/' + 4).subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.staticList = this.res;
        console.log('staticList', this.staticList);
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
    } else {
      this.router.navigate(['/book/appt']);
    }
  }
}
