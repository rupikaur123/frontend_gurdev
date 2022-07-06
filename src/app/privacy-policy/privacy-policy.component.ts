import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  staticList: any = []
  res: any;
  baseUrl: any = 'http://api.gurdevhospital.co/';
  constructor(private route: Router, public http: HttpClient) { }

  ngOnInit(): void {
    this.getStaticList();
  }
  getStaticList() {
    this.http.get<any>(this.baseUrl + 'api/static_pages_front/' + 2).subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.staticList = this.res;
        console.log('staticList', this.staticList);
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
