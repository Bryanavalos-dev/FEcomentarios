import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiServices } from './services/api.services';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarComentarioComponent,
    NavBarComponent,
    ListComentariosComponent,
    VerComentarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ApiServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
