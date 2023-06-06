import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output() search: EventEmitter<string>=new EventEmitter<string>();
  filter= "";
  allPosts: any[] = []; // Variable para almacenar todos los anuncios sin filtrar
  filteredPosts: any[] = []; // Variable para almacenar los anuncios filtrados

  searchPost(): void {
    this.search.emit(this.filter);
    this.applyFilter();
  }
  applyFilter(): void {
    // Filtrar los anuncios basado en el filtro ingresado
    this.filteredPosts = this.allPosts.filter(post => {
      // Aquí debes implementar la lógica de filtrado según tus necesidades
      // Por ejemplo, puedes filtrar por título, descripción u otras propiedades del anuncio
      return post.title.toLowerCase().includes(this.filter.toLowerCase());
    });
  }
}
