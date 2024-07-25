import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProddetailsComponent } from './proddetails/proddetails.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
 //{path:'home',component:HomeComponent,canActivate:[AuthGuard]},
 {path:'proddetails',component:ProddetailsComponent},
 {path:'product/:id',component:ProductComponent},
 {path:'cart',component:CartComponent},
 {path:'about',component:AboutComponent},
 {path:'contact',component:ContactComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
