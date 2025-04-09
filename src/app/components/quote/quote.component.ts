import { Component, Input } from '@angular/core';
import { Quote } from '../../type/quote.type';

@Component({
  selector: 'app-quote',
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css',
})
export class QuoteComponent {
  @Input() quote!: Quote;
}
