import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-bags',
  templateUrl: './product-bags.component.html',
  styleUrl: './product-bags.component.scss'
})
export class ProductBagsComponent implements OnInit {
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
