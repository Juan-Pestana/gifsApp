import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  get historial() {
    return this.gifsService.historial;
  }
  buscar(termino: string) {
    return this.gifsService.buscarGifs(termino);
  }
  constructor(private gifsService: GifService) {}
}
