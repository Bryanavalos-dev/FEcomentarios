import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentarios.model';

@Injectable()
export class ApiServices {
  apiUrl = 'http://localhost:5051/api/Comentario';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.apiUrl);
  }

  getComentario(id: number): Observable<Comentario> {
    return this.http.get<Comentario>(`${this.apiUrl}/${id}`);
  }

  createComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(
      this.apiUrl,
      comentario,
      this.httpOptions
    );
  }

  updateComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.put<Comentario>(
      `${this.apiUrl}/${comentario.id}`,
      comentario,
      this.httpOptions
    );
  }

  deleteComentario(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
