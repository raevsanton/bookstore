import { Method } from '../utils/fetcher';

export const apiConfig = {
  endpoints: {
    books: {
      getAllBooks: {
        path: '/books',
        method: Method.GET,
      },
      getOneBook: {
        path: '/books/:id',
        method: Method.GET,
      },
      deleteOneBook: {
        path: '/books/:id',
        method: Method.DELETE,
      },
    },
  },
};
