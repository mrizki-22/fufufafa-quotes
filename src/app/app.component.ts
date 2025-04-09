import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteComponent } from './components/quote/quote.component';
import { Quote } from './type/quote.type';
import { QuoteService } from './services/quote.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuoteComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly quoteService = inject(QuoteService);
  readonly quotes = signal<Quote[]>([]);

  onSearch(e: Event) {
    console.log('search', e);
    const searchTerm = (e.target as HTMLInputElement).value;
    this.quotes.set(this.quoteService.search(searchTerm));
  }
}
