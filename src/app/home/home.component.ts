import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Slick } from 'ngx-slickjs';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  images = [
    '../../assets/img/img1.jpg',
    '../../assets/img/b10.jpg',
    '../../assets/img/b11.png',
    '../../assets/img/b12.jpg',
    '../../assets/img/b13.jpg',
    // '../../assets/img/b9.png',
    '../../assets/img/b2.jpeg',
    '../../assets/img/b1.jpg',
    '../../assets/img/cardiology-banner.jpg',
  ];
  reviews_details: any;
  galleryList: any = [];
  baseUrl: any = 'http://api.gurdevhospital.co/';
  ourFacilities = [
    {
      count: '80',
      text: 'Critical care beds',
    },
    {
      count: '60',
      text: 'Single patient beds',
    },
    {
      count: '300',
      text: 'beds',
    },
    {
      count: '20',
      text: 'departments',
    },
  ];
  res: any;
  news_name: any;
  treatment_name: any = [];
  doctorList: any = [];
  constructor(
    config: NgbCarouselConfig,
    private route: Router,
    public http: HttpClient,
    private metaService: Meta
  ) {
    console.log('images', this.images);
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    localStorage.setItem('page', '');
    this.addTag();
    this.getReviewList();
    this.getServiceList();
    this.getGalleryList();
    this.getDoctorList();
    this.getLatestNewsList();
  }

  addTag() {
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Gurdev Hospital is the best super speciality hospital in Punjab providing various services in cardiology, plastic surgery, joint replacement, Pulmonology, orthopaedics and Oncology etc.',
      },
      {
        name: 'keywords',
        content:
          'Best super speciality hospital in punjab, Best super speciality hospital, Best super speciality hospital in ropar, Gurdev Hospital, Gurdev Super Speciality Hospital, Gurdev Hospital Nurpur Bedi, Gurdev Hospital Ropar',
      },
      { name: 'title', content: 'Best Super Specialty Hospital in Punjab' },
    ]);
  }
  getLatestNewsList() {
    this.http.get<any>(this.baseUrl + 'api/get_latest_news').subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.news_name = this.res;
        console.log('new_name', this.news_name);
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
  getServiceList() {
    this.http.get<any>(this.baseUrl + 'api/get_services').subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.treatment_name = this.res.filter((x: any) => {
          return x.image != '' && x.image != undefined && x.image!=null;
        });
        // this.treatment_name = this.res;
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
  getDoctorList() {
    this.http.get<any>(this.baseUrl + 'api/doctors_front').subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.doctorList = this.res;
        console.log('doctorList', this.doctorList);
      },
      error: (err: any) => {
        console.log('failed with the errors', err.error);
        if (err.error) {
        } else {
        }
      },
      complete: () => {},
    });
  }
  getGalleryList() {
    this.http.get<any>(this.baseUrl + 'api/gallery_list').subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.galleryList = this.res;
        console.log('galleryList', this.galleryList);
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
  getReviewList() {
    this.http.get<any>(this.baseUrl + 'api/reviews_front').subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.reviews_details = this.res;
        console.log('reviews_details', this.reviews_details);
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
  navigate() {
    console.log('***')
    this.route.navigate(['/services']);
  }
  redirect(data: any) {
    this.route.navigate(['/news/details/' + data.id]);
  }
  move() {
    this.route.navigate(['/latest-news']);
  }
  // slick config

  config: Slick.Config = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    mouseWheelMove: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  configHospitalTour: Slick.Config = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    mouseWheelMove: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  configTeam: Slick.Config = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    mouseWheelMove: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  configSpecialities: Slick.Config = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    mouseWheelMove: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  configReview: Slick.Config = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    mouseWheelMove: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
}
