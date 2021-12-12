import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListeMagasinComponent } from './liste-magasin/liste-magasin.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddMagasinComponent } from './add-magasin/add-magasin.component';

const routes: Routes = [
  { path: 'listeMagasin', component: ListeMagasinComponent },
  { path: 'listeProduits/:id', component: ListeProduitComponent },
  { path: 'addProduct', component: AddProductComponent },
  {path: 'addMagasin', component: AddMagasinComponent},
  { path: '', redirectTo: 'listeMagasin', pathMatch: 'full' }
  
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
