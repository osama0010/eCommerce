import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId:string = ""
  productDetails:Product = {} as Product
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
  constructor (private _ActivatedRoute:ActivatedRoute,private _productsService:ProductsService,private _CartService:CartService){
    this._ActivatedRoute.paramMap.subscribe((res:any)=>{
      console.log(res.params.id);
      this.productId = res.params.id
    })
    this._productsService.getProductsById(this.productId).subscribe({
      next:(res)=> {
        console.log(res.data);
        this.productDetails=res.data
      }
    })
  }

  addToCart(id:string){
    this._CartService.addProductCart(id).subscribe({
      next: (res)=> {
        console.log(res);
        
      }
    })
  }

}
