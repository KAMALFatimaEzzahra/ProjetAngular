import { Component } from '@angular/core'
import { ListeUserService } from './liste-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private ListeUserService:ListeUserService)
  {}

  title = 'AppFirst';
  Nom:string='KAMAL';
  Prenom:string='Fatima Ezzahra';
  Age:number=23;
  img:string="https://picsum.photos/536/354";
  monNom:string="Hassan";
  Tab : number [] = [1,3,5,7,9,11,13,15];
  b:any=[]
  Liste:any=this.ListeUserService.getListe();



  AfficherImage()
  {
    this.img="https://picsum.photos/536/354";
  }

  SupprimerImage()
  {
    this.img="";
  }

  
   View(a){
    let pos = this.Liste.indexOf(a);
    this.b= this.Liste[pos];
  }
}