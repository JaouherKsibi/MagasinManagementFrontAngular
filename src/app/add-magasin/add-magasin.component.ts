import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Magasin } from '../model/Magasin';
import { BackendCallsService } from '../services/backend-calls.service';

@Component({
  selector: 'app-add-magasin',
  templateUrl: './add-magasin.component.html',
  styleUrls: ['./add-magasin.component.css']
})
export class AddMagasinComponent implements OnInit {
  magasin:Magasin={'nom': '','lieu':''};

  constructor(private service: BackendCallsService,private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.magasin);
    this.service.addMagasin(this.magasin).subscribe({
      next: (data:any)=>{ this.router.navigate(['/listeMagasin']); },
      error: (e:any) => console.error(e),
      complete:()=>{}
    })
  }

}
