import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


  miImagen: any = [];
  id: any;

  constructor(private activatedRoute: ActivatedRoute,
    private productosService: ProductosService) {

    this.id = activatedRoute.snapshot.paramMap.get("id");
    console.log("ID desde detalle", this.id);
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {

    this.productosService.getById(this.id)
      .subscribe(
        (res: any) => {
          this.miImagen.push(
            {
              nombre: res.name,
              peso: res.weight,
              altura: res.height,
              experiencia: res.base_experience,
              imagen: res.sprites.other["official-artwork"].front_default
            }
          )
        }
      );
  }
}

