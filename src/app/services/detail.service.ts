import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor(private http: HttpClient) {}

  getProductDetail(id: string | null) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
