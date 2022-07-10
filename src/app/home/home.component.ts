import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Slick } from 'ngx-slickjs';

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
  ];
  hospitalObject = [
    {
      image: '../../assets/img/hospital1.jpg',
      thumbImage: '../../assets/img/hospital1.jpg',
    },
    {
      image: '../../assets/img/hospital2.jpg',
      thumbImage: '../../assets/img/hospital2.jpg',
    },
    {
      image: '../../assets/img/hospital3.jpg',
      thumbImage: '../../assets/img/hospital3.jpg',
    },
    {
      image: '../../assets/img/hospital1.jpg',
      thumbImage: '../../assets/img/hospital1.jpg',
    },
    {
      image: '../../assets/img/hospital1.jpg',
      thumbImage: '../../assets/img/hospital1.jpg',
    },
    {
      image: '../../assets/img/hospital2.jpg',
      thumbImage: '../../assets/img/hospital2.jpg',
    },
    {
      image: '../../assets/img/hospital3.jpg',
      thumbImage: '../../assets/img/hospital3.jpg',
    },
    {
      image: '../../assets/img/hospital1.jpg',
      thumbImage: '../../assets/img/hospital1.jpg',
    },
  ];
  imageObject = [
    {
      image: '../../assets/img/hospital3.jpg',
      thumbImage: '../../assets/img/hospital3.jpg',
      title: 'Cardiology',
    },
    {
      image: '../../assets/img/treatment2.png',
      thumbImage: '../../assets/img/treatment2.png',
      title: 'Cardiology',
    },
    {
      image: '../../assets/img/treatment3.png',
      thumbImage: '../../assets/img/treatment3.png',
      title: 'Cardiology',
    },
    {
      image: '../../assets/img/treatment4.png',
      thumbImage: '../../assets/img/treatment4.png',
      title: 'Cardiology',
    },
    {
      image: '../../assets/img/treatment5.png',
      thumbImage: '../../assets/img/treatment5.png',
      title: 'Cardiology',
    },
    {
      image: '../../assets/img/treatment6.png',
      thumbImage: '../../assets/img/treatment6.png',
      title: 'Cardiology',
    },
    {
      image: '../../assets/img/treatment7.png',
      thumbImage: '../../assets/img/treatment7.png',
      title: 'Cardiology',
    },
    {
      image: '../../assets/img/treatment8.png',
      thumbImage: '../../assets/img/treatment8.png',
      title: 'Cardiology',
    },
    {
      image: '../../assets/img/treatment9.png',
      thumbImage: '../../assets/img/treatment9.png',
      title: 'Cardiology',
    },
  ];

  reviews_details: any
  galleryList:any=[]
  baseUrl: any = 'http://api.gurdevhospital.co/';
  ourFacilities = [
    {
      count:'80',
      text:'Critical care beds',
    },
    {
      count:'60',
      text:'Single patient beds',
    },
    {
      count:'300',
      text:'beds',
    },
    {
      count:'20',
      text:'departments',
    }
  ]
  res:any
  treatment_name:any=[]
  doctorList:any=[]
  constructor(config: NgbCarouselConfig, private route: Router,public http: HttpClient) {
    console.log('images', this.images);
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    localStorage.setItem('page', '')
    this.getReviewList()
    this.getServiceList()
    this.getGalleryList()
    this.getDoctorList()
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
  getReviewList(){
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
      complete: () => { },
    });
  }
  navigate() {
    this.route.navigate(['/treatment']);
  }
  redirect(){
    this.route.navigate(['/news/details']);
  }
  // slick config

  config: Slick.Config = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  }
  configHospitalTour: Slick.Config = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows:true,
    autoplaySpeed: 3000 ,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  configTeam: Slick.Config = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows:true,
    autoplaySpeed: 3000 ,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  configSpecialities: Slick.Config = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows:true,
    autoplaySpeed: 3000 ,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  }

  configReview: Slick.Config = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows:true,
    autoplaySpeed: 3000 ,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

}
