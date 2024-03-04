import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.scss'
})
export class ProductHomeComponent implements OnInit {
  products: any;

  constructor(public productService: ProductService) {

  }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data: any) => this.products=data
    )
  }

}
