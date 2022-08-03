import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  staticList: any = []
  res: any;
  baseUrl: any = 'http://api.gurdevhospital.co/';
  constructor(private route: Router, public http: HttpClient,private metaService: Meta) { }

  ngOnInit(): void {
    localStorage.setItem('page', '')
    this.getStaticList();
  }
  addTag() {
    this.metaService.addTags([
      { name: 'description', content: this.staticList.meta_description },
      { name: 'keywords', content: this.staticList.meta_keyword } ,
      { name: 'title', content: this.staticList.meta_title } 
    ]);
  }
  getStaticList() {
    this.http.get<any>(this.baseUrl + 'api/static_pages_front/' + 1).subscribe({
      next: (data: any) => {
        console.log('Get completed sucessfully. The response received ' + data);
        this.res = data.data;
        this.staticList = this.res;
        console.log('staticList', this.staticList);
        this.addTag()
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
