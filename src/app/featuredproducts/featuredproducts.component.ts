import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {Product} from '../product'
@Component({
  selector: 'app-featuredproducts',
  templateUrl: './featuredproducts.component.html',
  styleUrls: ['./featuredproducts.component.css']
})
export class FeaturedproductsComponent implements OnInit {

allProducts:Product[]=[]
searchKey:string=""

constructor(private _ProductsService:ProductsService){ }

ngOnInit(): void {
  this.getAllProducts()
}
getAllProducts(){
  this._ProductsService.getProducts().subscribe({
    next:(res)=>{
      console.log(res);      
      this.allProducts = res.data
    }
  })
}

}
