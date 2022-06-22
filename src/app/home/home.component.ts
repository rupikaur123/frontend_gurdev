import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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
  constructor(config: NgbCarouselConfig, private route: Router) {
    console.log('images', this.images);
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {}
  navigate() {
    this.route.navigate(['/treatment']);
  }
}
