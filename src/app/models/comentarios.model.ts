export class Comentario {
  id?: number;
  titulo: string;
  texto: string;
  creador: string;
  fechaCreacion: Date;

  constructor(
    titulo: string,
    texto: string,
    creador: string,
    fechaCreacion: Date
  ) {
    this.titulo = titulo;
    this.texto = texto;
    this.creador = creador;
    this.fechaCreacion = fechaCreacion;
  }
}
