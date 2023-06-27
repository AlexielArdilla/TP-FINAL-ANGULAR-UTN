import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseURL:string = "https://pokeapi.co/api/v2";

  constructor(private http:HttpClient) {

   }

   getById(id:any){

    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

   }

   getPokemons(index:any){

    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
   }


}
