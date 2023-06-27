import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  miImagen: any = [];

  constructor(private productosService: ProductosService) {

  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {

    for (let i = 1; i <= 150; i++) {

      this.productosService.getPokemons(i)
        .subscribe(
          (res: any) => {
            this.miImagen.push(
              {
                nombre: res.name,
                peso: res.weight,
                imagen: res.sprites.other["official-artwork"].front_default,
                id: i
              }
            )
          }
        )
    }
  }
}
