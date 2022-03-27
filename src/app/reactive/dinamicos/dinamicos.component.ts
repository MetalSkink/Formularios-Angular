import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)] ],
    favoritos: [this.fb.array([
      ['Arkham city', Validators.required],
      ['Dragon Ball figtherz',Validators.required]
    ], Validators.required)]
  })

  get favoritosArr(){
    return this.miFormulario.get('favoritos')?.value as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  campoNoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
