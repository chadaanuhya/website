import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  currentUser:string|null=null;
  constructor(private authservice:AuthService,private router:Router){}
  ngOnInit(): void {
    
    this.currentUser=this.authservice.getCurrentUser();
    if(!this.currentUser){
      this.router.navigate(['/login'])
    }
  }
  logout(){
    this.authservice.logout();
    this.router.navigate(['/login'])
  }
  

}
