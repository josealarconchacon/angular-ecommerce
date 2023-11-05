import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Product } from "../common/product";
import { Getresponse } from "../getresponse";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  // define a base url for the spring service
  private baseServiceUrl = "";

  constructor(private httpClient: HttpClient) {}

  // method return an observable of product array
  // map json data from spring data rest to a product array
  getProductList(): Observable<Product[]> {
    return this.httpClient
      .get<any>(this.baseServiceUrl)
      .pipe(map((data) => data._embedded.products));
  }
}
