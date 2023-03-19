import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-comentario',
  templateUrl: './ver-comentario.component.html',
  styleUrls: ['./ver-comentario.component.css'],
})
export class VerComentarioComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
