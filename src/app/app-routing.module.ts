import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", canActivate: [authGuard], component: HomeComponent },
  { path: "about", canActivate: [authGuard], component: AboutComponent },
  { path: "about", canActivate: [authGuard], component: AboutComponent },
  { path: "categories", canActivate: [authGuard], component: CategoriesComponent },
  { path: "productDetails/:id", canActivate: [authGuard], component: ProductDetailsComponent },
  { path: "setting", canActivate: [authGuard], loadChildren: () => import('./setting/setting.module').then((x)=> x.SettingModule)  },
  { path: "products", canActivate: [authGuard], component: ProductsComponent },
  { path: "brands", canActivate: [authGuard], component: BrandsComponent },
  { path: "checkout/:cartId", component: CheckoutComponent },
  { path: "allorders", component: OrdersComponent },
  { path: "signup", component: SignUpComponent },
  { path: "login", component: SignInComponent },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: "**", component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
