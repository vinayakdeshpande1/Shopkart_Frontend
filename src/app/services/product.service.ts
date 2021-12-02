import { Injectable } from '@angular/core';
import { ApiService } from '../auth-service/api.service';
import { hostedAPI } from '../global.variables';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private auth: ApiService) { }

  async fetchProduct(productId:string) {
    return await fetch(`${hostedAPI}/products/${productId}`)
      .then((res) => res.json())
      .then((data) => data.data)
  }

  async fetchProductsByCategory(category:string) {
    return await fetch(`${hostedAPI}/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => data.data)
  }
}
