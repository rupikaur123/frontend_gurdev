import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  isSubmitted = false;
  public bookApptForm!: FormGroup;
  staticList: any = []
  minDate = new Date();

  res: any;
  treatment_name: any = []
  baseUrl: any = 'http://api.gurdevhospital.co/';
  constructor(private route: ActivatedRoute, private router: Router, public http: HttpClient, private metaService:Meta) { }
  ngOnInit(): void {
    let MOBILE_PATTERN = /[0-9\+\-\ ]/;
    this.getServiceList();
    this.getStaticList();
    this.bookApptForm = new FormGroup({
      // date: new FormControl(new Date()),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(MOBILE_PATTERN),
      ]),
      services: new FormControl('', [Validators.required]),
    });
  }
  addTag() {
    this.metaService.addTags([
      { name: 'description', content: this.staticList.meta_description },
      { name: 'keywords', content: this.staticList.meta_keyword } ,
      { name: 'title', content: this.staticList.meta_title } 
    ]);
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
        this.addTag()
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
      localStorage.setItem('name', this.bookApptForm.value.name)
      localStorage.setItem('phone', this.bookApptForm.value.phoneNumber)
      localStorage.setItem('services', this.bookApptForm.value.services)
      localStorage.setItem('page', 'contact')
      this.router.navigate(['/book/appt']);
    }
  }
}
