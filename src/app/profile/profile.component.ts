import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
 constructor(public service: ApiService, public cookie: CookieService, public router: Router) {
  this.showUserData()
 }

 public prof:any
 showUserData() {
  this.service.getUser().subscribe( (data:any) => {
    console.log(data);
    this.prof = data
  })
 }


 signOut() {
  this.cookie.delete("user")
  this.router.navigate(['/'])
 }
}
