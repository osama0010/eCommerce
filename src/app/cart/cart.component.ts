import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Cart } from './interface/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails:Cart = {} as Cart
constructor(private _cartService:CartService){}
ngOnInit(): void {
  this.getCart()
}

getCart() {
  return this._cartService.getCart().subscribe({
    next: (res) => {
      console.log(res);
      this.cartDetails=res
      console.log(this.cartDetails);
      
    }
  })
}
updateCount(count:number,id:string){
  this._cartService.updateProductCount(count,id).subscribe({
    next: (res) => {
      console.log(res);
      this.cartDetails = res
    }
  })
}
removeProduct(id:string){
  this._cartService.removeCartProduct(id).subscribe({
    next: (res) => {
      console.log(res);
      this.cartDetails=res      
    }
  })
}
}
