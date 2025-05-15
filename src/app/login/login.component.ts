import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public service: ApiService, public cookie: CookieService) {}

  public formArea: FormGroup = new FormGroup({
    
    
    email: new FormControl(),
    password: new FormControl(),
   
  })


  login() {
    console.log();
    this.service.signIn(this.formArea.value).subscribe( (data:any) => {
      console.log(data);
      this.cookie.set("user", data.access_token)
    } )
  }
}
