export interface IBooks {
  list: Array<Book>;
  book: Book;
  parameters: Partial<Parameters>;
  error: boolean;
  loaded: boolean;
}

export interface Book {
  id: number;
  link: string;
  cover: string;
  title: string;
  subtitle: string;
  authors: string[];
  description: string;
  price: number;
}

export interface Parameters {
  sort: string;
}
