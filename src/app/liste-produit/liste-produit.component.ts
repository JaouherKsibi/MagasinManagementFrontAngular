import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/Produit';
import { BackendCallsService } from '../services/backend-calls.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css'],
})
export class ListeProduitComponent implements OnInit {
  id!: number;
  produits!: Produit[];
  constructor(
    private service: BackendCallsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductsByIdMagasin();
  }

  getProductsByIdMagasin() {
    this.service.getProductsByIdMagasin(this.id).subscribe({
      next: (data) => {
        this.produits = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  delete(produit:Produit){
    this.service.deleteProduct(Number (produit.id)).subscribe({
      next: () => {
       
        this.getProductsByIdMagasin()
      },
      error: (e) => console.error(e)
    });
  }
}
