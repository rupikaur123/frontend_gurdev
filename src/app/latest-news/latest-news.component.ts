import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  news_name:any=[]
  res: any;
  baseUrl: any = 'http://api.gurdevhospital.co/';
  constructor(private route: Router, public http: HttpClient) {}

  ngOnInit(): void {
    this.getServiceList();
  }
  navigate(data: any) {
    this.route.navigate(['/news/details/' + data.id]);
  }
  getServiceList() {
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

}
