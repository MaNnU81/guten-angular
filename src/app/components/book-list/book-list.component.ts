import { Component, effect, inject, signal } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  bookService = inject(BookService);
  books = signal<any[]>([]);

  constructor() {
    // Sincronizza i libri con il servizio
    effect(() => {
      this.books.set(this.bookService.bookArray());
    });

    // Caricamento iniziale
    this.bookService.getBooksData();
  }

  nextPage() {
    this.bookService.page.update(p => p + 1);
    this.bookService.getBooksData();
  }

  prevPage() {
    if (this.bookService.page() > 1) {
      this.bookService.page.update(p => p - 1);
      this.bookService.getBooksData();
    }
    
  }
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth' // Scorrimento animato
    });
  }

  
}