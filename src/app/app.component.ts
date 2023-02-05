import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  constructor(    private http: HttpClient,    private componentFactoryResolver: ComponentFactoryResolver  ) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    this.http
      .post(
        'https://triosuite-task-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }






}
