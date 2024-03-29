import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'app-treatment-details',
  templateUrl: './treatment-details.component.html',
  styleUrls: ['./treatment-details.component.css'],
})
export class TreatmentDetailsComponent implements OnInit {
  banner: any;
  title: any;
  content: any;
  serviceId: any;
  res: any;
  treatment_name:any
  treatment_details: any
  baseUrl: any = 'http://api.gurdevhospital.co/';
  constructor(private route: Router, private router: ActivatedRoute, public http: HttpClient,private metaService: Meta) {
    this.banner = '../../assets/img/img2.jpg';
    this.title = 'Arthroscopy – Sports Injury';
    this.content =
      'What is Arthroscopy Surgery?Arthroscopy, also termed as arthroscopic surgery, is a minimally invasive surgical procedure used by surgeons to examine, diagnose, envision and treat damages related to the interior of a joint. This procedure is performed using an arthroscope, a type of endoscope that is inserted into the joint through a small incision in the patient’s skin. Arthroscopic procedures are usually carried out either to examine or to treat a range of orthopaedic conditions. These conditions may include torn floating cartilage, torn surface cartilage, ACL reconstruction and trimming damaged cartilage.';
    this.serviceId = this.router.snapshot.params['id'];
    console.log('this.serviceId', this.serviceId);
  }

  ngOnInit(): void {
    this.getServiceList()
 

  }
  addTag() {
    this.metaService.addTags([
      { name: 'description', content: this.treatment_details.meta_description },
      { name: 'keywords', content: this.treatment_details.meta_keyword } ,
      { name: 'title', content: this.treatment_details.meta_title } 
    ]);
  }
  getServiceDetail(id:any) {
    this.http.get<any>(this.baseUrl + 'api/get_services/' + id).subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.treatment_details = this.res;
        console.log('treatment_name', this.treatment_details);
        this.addTag()
      },
      error: (err: any) => {
        console.log('failed with the errors', err.error);
        if (err.error) {
        } else {
       }
      },
      complete: () => { },
    });
  }
  getServiceList() {
    this.http.get<any>(this.baseUrl + 'api/get_services').subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.treatment_name = this.res;
        console.log('treatment_name', this.treatment_name);
        let service= this.treatment_name.filter((X:any)=>{
          return X.alies_name == this.serviceId
        })
        console.log('serviceId',service[0].id)
        this.getServiceDetail(service[0].id)
      },
      error: (err: any) => {
        console.log('failed with the errors', err.error);
      },
      complete: () => { },
    });
  }
  navigate() {
    this.route.navigate(['/book/appt/' + this.serviceId]);
  }

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

}
