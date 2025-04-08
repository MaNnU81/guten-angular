import { Component, inject, signal, input } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../book-model';
import { effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  book = signal<Book | null>(null);
  id = input<number>()
  bookserv = inject(BookService);

  constructor() {
    
    effect(() => {
      this.book.set(this.bookserv.getBookById(this.id() ?? 0));
    })
  }
  
}

