import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';
  message:string='';
  constructor(private authService:AuthService,private router:Router){}
  login(){
    if(this.email.trim()&&this.password.trim()){
    
    if(this.authService.login(this.email,this.password)){
      this.message="Login successful!";
      setTimeout(()=>
        this.router.navigate(['/proddetails']),2000);
    }else{
      this.message='Invalid credentials or signup !';
      
    }
    }else{
      this.message="Please enter both email and password.";
    }
  }
    /*const result=this.authService.login(this.email,this.password);
    alert(result?'Login successful':'Invalid email or password');
    if(result){
      this.router.navigate(['/products']);
    
    }
  }*/

}
