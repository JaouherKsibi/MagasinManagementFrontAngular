import { Magasin } from "./Magasin";

export class Produit {
    id?:number ;
	description!:String ;
	quantite!:number;
	prixAchat!:number ;
	prixVente!:number;
	magasin!:Magasin 
}