import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryList:any=[]
  res: any;
  baseUrl: any = 'http://api.gurdevhospital.co/';
  constructor(private route: Router, public http: HttpClient) {}

  ngOnInit(): void {
    this.getGalleryList();
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

}
