import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email:string='';
  password:string='';
  message:string='';
  constructor(private authService:AuthService,private router:Router){}
  signup(){
    if(this.email.trim()&&this.password.trim()){

    if(this.authService.signup(this.email,this.password)){
      this.message="Registration successful!";
      setTimeout(()=>
        this.router.navigate(['/login']),2000);
    }else{
      this.message='User already exists!'
    }}
    else{
      this.message="Please enter both email and password.";

    }
    }
    /*const result=this.authService.signup(this.email,this.password);
    alert(result?'Signup successful':'Email already registeredd');
    if(result){
      this.router.navigate(['/products']);
    
    }*/
  }


