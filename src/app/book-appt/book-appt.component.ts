import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, TitleStrategy } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


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
  msg: any;
  public loading = false;

  @ViewChild('mymodal') someInput!: 'mymodal';
  constructor(private route: ActivatedRoute, private router: Router, public http: HttpClient, private spinner: NgxSpinnerService, private modalService: NgbModal) {
    this.service_id = this.route.snapshot.params['id'];
    console.log('Book_Appointment', this.service_id);
    this.maxDate.setDate(this.maxDate.getDate());
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.startDate = this.maxDate;
  }
  data: any
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
      date: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      address: new FormControl('', [Validators.maxLength(100)]),
      services: new FormControl(this.service_id, [Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(MOBILE_PATTERN),
      ]),
      comments: new FormControl(''),
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
    this.isSubmitted = true;
    if (this.bookApptForm.invalid) {
      return;
    } else {
      let formdata = new FormData()
      formdata.append('u_full_name', this.bookApptForm.value.name)
      formdata.append('u_phone_number', this.bookApptForm.value.phoneNumber)
      formdata.append('service_id', this.bookApptForm.value.services)
      formdata.append('u_email', this.bookApptForm.value.email)
      formdata.append('u_address', this.bookApptForm.value.address)
      formdata.append('u_dob', this.bookApptForm.value.date)
      formdata.append('comment', this.bookApptForm.value.comments)
      this.http.post<any>(this.baseUrl + 'api/book_appointment', formdata)
        .subscribe({
          next: (response: any) => {
            this.data = response
            console.log("Data" + this.data);
            if (this.data.success == true) {
              this.msg = this.data.message
              // this.open(mymodal)
            }
            this.isSubmitted = false;
            this.bookApptForm.reset()
          },
          error: (err: any) => {
            console.log('failed with the errors', err.error);
            if (err.error) {
              this.msg = err.error.message
              // this.open(mymodal)
              // this.toster.error(err.error.message);
            } else {
              this.msg = 'Something went wrong'
              // this.open(mymodal)
              // this.toster.error('Something went wrong');
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
        console.log('treatment_name', this.treatment_name);
      },
      error: (err: any) => {
        console.log('failed with the errors', err.error);
        if (err.error) {
          this.msg = err.error.message
          // this.open(mymodal)
          // this.toster.error(err.error.message);
        } else {
          this.msg = 'Something went wrong'
          // this.open(mymodal)
          // this.toster.error('Something went wrong');
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
