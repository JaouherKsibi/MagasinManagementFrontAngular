import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Magasin } from '../model/Magasin';
import { Produit } from '../model/Produit';

//import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})

export class BackendCallsService {

  
  constructor(
    private http: HttpClient
  ) { }

  getListMagasin1():Observable<Magasin[]>
    {
      let ss=this.http.get<Magasin[]>("localhost:8080/getAllMagasin")
      console.log(ss);
      
      return this.http.jsonp<Magasin[]>("http://localhost:8080/getAllMagasin", 'callback').pipe()
    }
    getListMagasin():Observable<Magasin[]>
    {
      
      
      return this.http.get<Magasin[]>("http://localhost:8080/getAllMagasin")
    }

    addProduit(p:Produit): Observable<Produit>{
      return this.http.post<Produit>("http://localhost:8080/addProduit", p)
    .pipe(
     
    );
    }
    addMagasin(m:Magasin): Observable<Magasin>{
      return this.http.post<Magasin>("http://localhost:8080/addMagasin", m)
    .pipe(
     
    );
    }

    delete(id:number){
      return this.http.delete<Magasin>(`http://localhost:8080/deleteMagasinById/${id}`).pipe();
    }

    getProductsByIdMagasin(id:number):Observable<Produit[]>{
      return this.http.get<Produit[]>(`http://localhost:8080/getProductsByIdMagasin/${id}`).pipe();
    }

    deleteProduct(id:number){
      return this.http.delete<Magasin>(`http://localhost:8080/deleteProductById/${id}`).pipe();
    }
    
}
