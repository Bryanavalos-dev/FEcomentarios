import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from '../../models/comentarios.model';
import { ApiServices } from '../../services/api.services';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css'],
})
export class AgregarEditarComentarioComponent implements OnInit {
  comentarios: FormGroup;
  idComentario = 0;
  action: string = 'Agregar';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiServices,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.comentarios = this.formBuilder.group({
      titulo: ['', Validators.required],
      texto: ['', Validators.required],
      creador: ['', Validators.required],
      fechaCreacion: ['', Validators.required],
    });
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.idComentario = Number(this.route.snapshot.paramMap.get('id'));
    }
  }

  guardarComentario() {
    console.log(this.comentarios);
    this.apiService
      .createComentario({
        ...this.comentarios.value,
        fechaCreacion: new Date(),
      })
      .subscribe();
    this.comentarios.reset();
    this.router.navigate(['/']);
  }

  esEditar() {
    if (this.idComentario != 0) {
      this.action = 'Editar';
      this.apiService.getComentario(this.idComentario).subscribe((data) => {
        this.comentarios.patchValue(data);
      });
    }
  }

  ngOnInit(): void {
    this.esEditar();
  }

  validateAction() {
    if (this.action == 'Editar') {
      this.apiService
        .updateComentario({ ...this.comentarios.value, id: this.idComentario })
        .subscribe();
      this.router.navigate(['/']);
    } else {
      this.guardarComentario();
    }
  }
}
