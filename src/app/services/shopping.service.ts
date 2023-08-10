import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { ShoppingModel } from './shopping-model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
private apiUrl = 'http://localhost:3000/shopping';
private itemsApiUri = 'http://localhost:3000/items'

  constructor(private http:HttpClient) { }

  postShoppingList(data:any){
    return this.http.post<ShoppingModel>(this.apiUrl,data).
    pipe(map((resp:ShoppingModel)=>{
      return resp
    }))
  }
  getItemsName(){
    return this.http.get<any>(this.itemsApiUri).
    pipe(map((resp:any)=>{
      return resp;
    }))
  }


}

