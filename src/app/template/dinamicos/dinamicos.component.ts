import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent   {

  nuevoJuego: string = "";

  persona: Persona = {
    nombre: 'Metal',
    favoritos : [
      {id: 1, nombre: 'Dark Souls'},
      {id: 2, nombre: 'Elden Ring'},
      {id: 3, nombre: 'Gears of War'},
      {id: 4, nombre: 'Halo Reach'},
      {id: 5, nombre: 'Batman Arkham City'},
      {id: 6, nombre: 'Red Dead Redemption 2'}
    ]
  }

  guardar(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego=''
  }

  borrar(i:number){
    this.persona.favoritos.splice(i,1);
  }
}
