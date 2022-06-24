import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  isSubmitted = false;
  public bookApptForm!: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router) {}
  treatment = [
    { value: 'Cardiology', id: '1' },
    { value: 'Oncology', id: '2' },
    { value: 'Neuro Science', id: '3' },
    { value: 'Urology', id: '4' },
  ];
  ngOnInit(): void {
    this.bookApptForm = new FormGroup({
      date: new FormControl(new Date()),
      services: new FormControl('', [Validators.required]),
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
    } else {
      this.router.navigate(['/book/appt']);
    }
  }
}
