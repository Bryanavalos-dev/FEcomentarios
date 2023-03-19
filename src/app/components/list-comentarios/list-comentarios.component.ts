import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../../models/comentarios.model';
import { ApiServices } from '../../services/api.services';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css'],
})
export class ListComentariosComponent implements OnInit {
  comentarios: Comentario[] = [];

  constructor(private apiService: ApiServices) {}

  ngOnInit(): void {
    this.apiService.getComentarios().subscribe((data) => {
      this.comentarios = data as Comentario[];
    });
  }

  eliminarComentario(id: number) {
    this.apiService.deleteComentario(id).subscribe((data) => {});
    window.location.reload();
  }

  fetchComentarios() {
    this.apiService.getComentarios().subscribe((data) => {
      this.comentarios = data as Comentario[];
    });
  }
}
