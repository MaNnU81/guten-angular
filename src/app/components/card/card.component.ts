import { Component, input } from '@angular/core';

@Component({
  selector: 'li[book-card]',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
 title = input.required<string>()
 cover = input.required<string>()
}
