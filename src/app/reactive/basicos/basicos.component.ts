import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 3080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5)
  // })

  ngOnInit(): void {
    // this.miFormulario.setValue({
    this.miFormulario.reset({
      nombre     : 'RTX 1660ti',
      precio     : 500,
      existencias: 15
    })
  }


  miFormulario: FormGroup = this.fb.group({
    nombre     : [, [Validators.required, Validators.minLength(3)] ],
    precio     : [, [Validators.required, Validators.min(0)] ],
    existencias: [, [Validators.required, Validators.min(0)] ]
  })

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
