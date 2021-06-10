import { Component, OnInit } from '@angular/core';
import { GifService } from '../services/gif-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [],
})
export class ResultadosComponent {
  get resultados() {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifService) {}
}
