import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../../models/comentarios.model';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css'],
})
export class ListComentariosComponent implements OnInit {
  comentarios: Comentario[] = [];

  constructor(private http: HttpClient) {}
  getComentarios(username: string) {
    const apiUrl = `http://localhost:5051/api/Comentario`;
    return this.http.get(apiUrl);
  }

  ngOnInit(): void {
    this.getComentarios('username').subscribe((data) => {
      console.log(data);
      this.comentarios = data as Comentario[];
    });
  }
}
