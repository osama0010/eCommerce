import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../shared/services/cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartId:string=""

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  })

  constructor(private _cartService:CartService,private _activatedRoute:ActivatedRoute){
    this._activatedRoute.paramMap.subscribe({
      next: (res:any) => {
        this.cartId = res.params.cartId
      }
    })
  }

  handleOnline(){
    console.log(this.shippingAddress);
    this._cartService.generateOnlinePayment("651eadef80ddab1dc7294e9a",this.shippingAddress.value).subscribe({
      next: (res) => { 
        if(res.status == "success"){
          console.log(res.session.url);
          window.location.href = res.session.url
        }
      }
    })
  }
}
