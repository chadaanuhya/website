import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"



@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {


  private URL ='http://localhost:4000/Products';

  constructor(private http:HttpClient) { }

  getData():Observable<any[]>{
    return this.http.get<any[]>(this.URL);
  }
  getProductById(id:any):Observable<any>{
    const url=`${this.URL}/${id}`;
    return this.http.get<any>(url);
  }

}
