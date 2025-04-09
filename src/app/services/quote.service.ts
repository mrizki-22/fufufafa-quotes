import { Injectable } from '@angular/core';
import { Quote } from '../type/quote.type';
import fufufafaQuotes from '../../../fufufafa-api.json';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor() {}

  search(searchTerm: string): Quote[] {
    if (!searchTerm || searchTerm.trim() === '') {
      return [];
    }

    const quotes: Quote[] = (fufufafaQuotes as any[]).map((quote) => ({
      id: quote.id,
      content: quote.content,
      dateTime: quote.datetime,
      doksli: quote.doksli,
      imageUrl: quote.image_url,
    }));

    // Buat RegExp untuk mencocokkan kata secara spesifik
    const searchRegex = new RegExp(
      `\\b${searchTerm.trim().toLowerCase()}\\b`,
      'i'
    );

    // Filter berdasarkan kecocokan kata
    const filteredQuotes = quotes.filter((quote) =>
      searchRegex.test(quote.content.toLowerCase())
    );

    return filteredQuotes;
  }
}
