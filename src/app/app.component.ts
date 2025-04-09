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
  readonly searchTerm = signal('');
  readonly quotes = signal<Quote[]>([]);
  readonly isLoading = signal(false);

  async onSearch(e: Event) {
    this.isLoading.set(true);
    this.searchTerm.set((e.target as HTMLInputElement).value);
    const result = await this.quoteService.search(this.searchTerm());
    this.quotes.set(result);
    this.isLoading.set(false);
  }
}
