import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  loadedPosts = [];

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
  }


}
