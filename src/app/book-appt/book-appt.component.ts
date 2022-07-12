import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, TitleStrategy } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';


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
  closeResult?: string;
  baseUrl: any = 'http://api.gurdevhospital.co/';
  res: any
  service: any
  maxDate = new Date(Date.now());
  startDate = this.maxDate;
  today = new Date()

  msg: any;
  public loading = false;
  name: any = ''
  phone: any = ''
  treatment: any = ''
  page: any = ''

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  @ViewChild('mymodal', { read: TemplateRef }) mymodal!: TemplateRef<any>;

  constructor(private route: ActivatedRoute, private router: Router, public http: HttpClient, private spinner: NgxSpinnerService, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.service_id = this.route.snapshot.params['id'];
    console.log('Book_Appointment', this.service_id);
    this.maxDate.setDate(this.maxDate.getDate());
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.startDate = this.maxDate;
  }
  data: any
  ngOnInit() {
    this.page = localStorage.getItem('page')
    if (this.page == 'contact' && this.service_id == undefined) {
      this.name = localStorage.getItem('name')
      this.phone = localStorage.getItem('phone')
      this.treatment = localStorage.getItem('services')
    }
    this.getServiceList()
    this.serviceForm()
  }
  serviceForm() {
    let MOBILE_PATTERN = /[0-9\+\-\ ]/;
    this.bookApptForm = this.formBuilder.group({
      name: [this.name, [
        Validators.required,
        Validators.maxLength(60),
      ]],
      date: ['', [Validators.required,]],
      email: ['', [Validators.email, Validators.required,]],
      address: ['', [Validators.maxLength(100)]],
      services: [this.service_id == undefined ? this.treatment : this.service_id, [Validators.required]],
      phoneNumber: [this.phone, [
        Validators.required,
        Validators.pattern(MOBILE_PATTERN),
      ]],
      comments: [''],
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

  onSubmit() {
    if (this.bookApptForm.invalid) {
      console.log('**')
      this.isSubmitted = true;
      return;
    } else {
      let serviceId = this.treatment_name.filter((x: any) => {
        return x.name == this.bookApptForm.value.services
      })
      let formdata = new FormData()
      formdata.append('u_full_name', this.bookApptForm.value.name)
      formdata.append('u_phone_number', this.bookApptForm.value.phoneNumber)
      formdata.append('service_id', serviceId[0].id)
      formdata.append('u_email', this.bookApptForm.value.email)
      formdata.append('u_address', this.bookApptForm.value.address)
      formdata.append('u_dob', moment(this.bookApptForm.value.date).format('DD-MM-YYYY'))
      formdata.append('comment', this.bookApptForm.value.comments)
      this.http.post<any>(this.baseUrl + 'api/book_appointment', formdata)
        .subscribe({
          next: (response: any) => {
            this.isSubmitted = false;
            this.formDirective.resetForm();
            localStorage.removeItem('page')
            localStorage.removeItem('name')
            localStorage.removeItem('phone')
            localStorage.removeItem('services')
            this.data = response
            console.log("Data" + this.data);
            if (this.data.success == true) {
              this.msg = this.data.message
              this.open(this.mymodal)
            }

          },
          error: (err: any) => {
            console.log('failed with the errors', err.error);
            if (err.error) {
              this.msg = err.error.message
              this.open(this.mymodal)
            } else {
              this.msg = 'Something went wrong'
              this.open(this.mymodal)
            }
          },
          complete: () => { },
        });
    }
  }
  getServiceList() {
    this.http.get<any>(this.baseUrl + 'api/get_services').subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.treatment_name = this.res;
        console.log('treatment_name', this.treatment_name, this.service_id);
      },
      error: (err: any) => {
        console.log('failed with the errors', err.error);
        if (err.error) {
          this.msg = err.error.message
          this.open(this.mymodal)
        } else {
          this.msg = 'Something went wrong'
          this.open(this.mymodal)
        }
      },
      complete: () => { },
    });
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
