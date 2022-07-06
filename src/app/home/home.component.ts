import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  images = [
    '../../assets/img/img1.jpg',
    '../../assets/img/img2.jpg',
    '../../assets/img/img1.jpg',
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
      image: '../../assets/img/treatment1.png',
      thumbImage: '../../assets/img/treatment1.png',
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
  constructor(config: NgbCarouselConfig, private route: Router,public http: HttpClient) {
    console.log('images', this.images);
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.getReviewList()
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
}
