import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule ,HttpClientJsonpModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ListeMagasinComponent } from './liste-magasin/liste-magasin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListeProduitPipe } from './liste-produit.pipe';
import { AddMagasinComponent } from './add-magasin/add-magasin.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListeProduitComponent,
    ListeMagasinComponent,
    ListeProduitPipe,
    AddMagasinComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
