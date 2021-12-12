import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Magasin } from '../model/Magasin';
import { Produit } from '../model/Produit';
import { BackendCallsService } from '../services/backend-calls.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  magasins!: Magasin[];
  magasin!:Magasin;
  description!:String;
  quantite!:number;
  prixAchat!:number;
  prixVente!:number;
  constructor(private service:BackendCallsService , private router:Router) { }

  ngOnInit(): void {
    this.getAllMagasins();
  }
  getAllMagasins(): void {
    this.service.getListMagasin()
      .subscribe({
        next: (data) => {
          this.magasins = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  add(){

    let p:Produit;
    p={description:this.description, quantite:this.quantite,prixAchat:this.prixAchat,prixVente:this.prixVente,magasin: this.magasin}
    //console.log(p);
    
    this.service.addProduit(p).subscribe({
      next: (data:any)=>{ this.router.navigate(['/listeMagasin']); },
      error: (e:any) => console.error(e),
      complete:()=>{}
    });
  }
}
