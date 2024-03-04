import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRouting } from './product.routes';
import { ProductHomeComponent } from './product-home/product-home.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProductHomeComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ProductRouting
  ]
})
export class ProductModule { }
