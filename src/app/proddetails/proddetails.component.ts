import { Component, OnInit } from '@angular/core';
import { ProductdetailsService } from '../services/productdetails.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.css']
})
export class ProddetailsComponent implements OnInit {
  


  Products: any[] =[];
  

  constructor(private dataService:ProductdetailsService,private router:Router,private cartservice:CartService){}

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.dataService.getData().subscribe((data)=>{
      this.Products=data;
      console.log(this.Products);
      this.Products.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
      
      
    })
  }
viewDetails(id:number):void{
  this.router.navigate(['/product',id])
}
addToCart(product:any){
  this.cartservice.addtoCart(product);
  window.alert('your product is Added to cart');
  console.log('Product added to cart:',product);
}  
  
}






