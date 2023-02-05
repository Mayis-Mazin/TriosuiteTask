import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomLayout1Component } from 'custom-layouts/custom-layout-1/custom-layout1-component/custom-layout1.component';
import { CustomLayout2Component } from 'custom-layouts/custom-layout-2/custom-layout2-component/custom-layout2.component';
import { LoginFormComponent } from './login/login-form/login-form.component';


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
