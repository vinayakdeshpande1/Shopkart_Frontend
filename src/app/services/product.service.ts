import { Injectable } from '@angular/core';
import { ApiService } from '../auth-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private auth: ApiService) { }

  async fetchProduct(productId: string) {
    return await fetch(`http://localhost:3300/products/${productId}`)
      .then((res) => res.json())
      .then((data) => data.data)
  }
}
