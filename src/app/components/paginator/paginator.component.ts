import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
 bookServ = inject(BookService);
}
