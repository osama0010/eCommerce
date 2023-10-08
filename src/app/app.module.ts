import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FeaturedproductsComponent } from './featuredproducts/featuredproducts.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SliderWrapperComponent } from './slider-wrapper/slider-wrapper.component';
import { TrimPipe } from './trim.pipe';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    BrandsComponent,
    HomeComponent,
    CategoriesComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    FeaturedproductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    SliderWrapperComponent,
    TrimPipe,
    SearchPipe,
    CheckoutComponent,
    OrdersComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
