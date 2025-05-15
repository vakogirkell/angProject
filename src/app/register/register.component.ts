import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(public service: ApiService) {}


  public formArea: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    address: new FormControl(),
    phone: new FormControl("+995"),
    zipcode: new FormControl(),
    avatar: new FormControl(),
    gender: new FormControl(),
  })


  register() {
    console.log();
    this.service.signUp(this.formArea.value).subscribe( (data:any) => {
      console.log(data);
      
    } )
  }
}
