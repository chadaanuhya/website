import { Component, OnInit } from '@angular/core';
import { ProductdetailsService } from '../services/productdetails.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any;
  constructor(private dataservice:ProductdetailsService,private route:ActivatedRoute,private cartservice:CartService){}
  ngOnInit(): void {
    const id= +this.route.snapshot.params['id'];
    console.log(id);
    this.dataservice.getProductById(id).subscribe((res)=>this.product=res)
  }
  
}
  
