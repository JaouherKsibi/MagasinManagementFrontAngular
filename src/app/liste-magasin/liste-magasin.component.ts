import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Magasin } from '../model/Magasin';
import { BackendCallsService } from "../services/backend-calls.service";
@Component({
  selector: 'app-liste-magasin',
  templateUrl: './liste-magasin.component.html',
  styleUrls: ['./liste-magasin.component.css']
})
export class ListeMagasinComponent implements OnInit {
  magasins?: Magasin[];
  constructor(private service: BackendCallsService,private router:Router ) { }

  ngOnInit(): void {
    //console.log("okkkk");
    
    this.getAllMagasins()
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

  delete(magasin:any){
    this.service.delete(magasin.id).subscribe({
      next: () => {
       
        this.getAllMagasins();
      },
      error: (e) => console.error(e)
    });
    
  }
  goToProducts(magasin:Magasin){
    console.log(magasin);
    this.router.navigate(['listeProduits', {'id':magasin.id}]);
    
  }
}
