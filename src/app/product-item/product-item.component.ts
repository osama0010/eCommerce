import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
@Input() product:Product = {} as Product

  constructor(private _CartService:CartService){

  }
  addToCart(id:string){
    this._CartService.addProductCart(id).subscribe({
      next: (res)=> {
        console.log(res);
        
      }
    })
  }
}
