import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookApptComponent } from './book-appt/book-appt.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TreatmentDetailsComponent } from './treatment-details/treatment-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'book/appt', component: BookApptComponent },
  { path: 'treatment', component: TreatmentComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'treatment/details/:id', component: TreatmentDetailsComponent },
  { path: 'book/appt/:id', component: BookApptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
