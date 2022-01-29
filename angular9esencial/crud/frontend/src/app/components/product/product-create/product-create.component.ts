//---------------------------------------------------------

/*
Author : @LucasDEV20
Year : @2021
*/

//---------------------------------------------------------

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Product } from '../product.model'
import { ProductService } from './../product.service'
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  }

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  creatProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      //no metodo subscribe eu serei notificado quando a resposta chegar
      this.productService.showMessage('Produto criado!')
       this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
    this.productService.showMessage('Produto não criado')
    
  }
}
