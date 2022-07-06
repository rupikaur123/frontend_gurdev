import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  newsId: any;
  res: any;
  news_details: any
  baseUrl: any = 'http://api.gurdevhospital.co/';
  constructor(private route: Router, private router: ActivatedRoute, public http: HttpClient) {
    this.newsId = this.router.snapshot.params['id'];
    console.log('this.serviceId', this.newsId);
  }

  ngOnInit(): void {
    this.getNewsDetails()
  }
  getNewsDetails() {
    this.http.get<any>(this.baseUrl + 'api/get_latest_news/' + this.newsId).subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.news_details = this.res;
        console.log('news_details', this.news_details);
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
  

}
