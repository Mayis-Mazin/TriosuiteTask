import { AuthService } from './../login/login-form/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{
  isAuthenticated=false;
  private userSub!: Subscription;
  constructor(private authService:AuthService){}
  ngOnInit(){
   this.userSub= this.authService.user.subscribe(user=>{
    this.isAuthenticated=!user?false:true
   })
  }

  onLogout(){}

  ngOnDestroy(){
    this.userSub.unsubscribe()
  }
}
