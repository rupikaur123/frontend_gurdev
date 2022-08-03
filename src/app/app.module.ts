import { NgModule } from '@angular/core';
import { BrowserModule ,Meta } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookApptComponent } from './book-appt/book-appt.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatCardModule } from '@angular/material/card';
import { TreatmentDetailsComponent } from './treatment-details/treatment-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule} from '@angular/material/select'
import { HttpClientModule } from '@angular/common/http';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import {  NgxSlickJsModule} from 'ngx-slickjs';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxLoadingModule } from "ngx-loading";
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    BookApptComponent,
    TreatmentComponent,
    ContactUsComponent,
    TreatmentDetailsComponent,
    LatestNewsComponent,
    NewsDetailComponent,
    GalleryComponent,
    PrivacyPolicyComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgbModule,
    NgImageSliderModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgHttpLoaderModule.forRoot(),
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
     NgxSlickJsModule.forRoot({
      links: {
        jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
        slickJs: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        slickCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
        slickThemeCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
      }
  })
  ],
  providers: [Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}
