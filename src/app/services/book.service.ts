import { Injectable, signal } from '@angular/core';
import { Book } from '../book-model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  page = signal(1);
  bookArray = signal<Book[]>([]);
  readonly baseUrl = "https://gutendex.com/books/?page=";




  constructor() { }

  async getBooksData(){
    const url = this.baseUrl + this.page();
    const response = await fetch(url) 
    const data = await response.json();
    this.bookArray.set(data.results)
  }

  getBookById(idToFind: number): Book | null{
    return this.bookArray().find(book => book.id === idToFind) ?? null
  }

}
