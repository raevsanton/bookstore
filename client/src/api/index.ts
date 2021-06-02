import axios from "axios"
import { Book } from '../types/types';

export const BASE_URL = 'http://localhost:8080/api/v1';

export const fetchAllBooks = () => axios.get<Book[]>(`${BASE_URL}/books`);
export const fetchOneBook = (id: string) => axios.get<Book>(`${BASE_URL}/book/${id}`);
export const deleteOneBook = (id: string) => axios.delete<Book>(`${BASE_URL}/book/${id}`);
//export const getSortedBooks = (event: string) => axios.post<Book[]>(`${BASE_URL}/books/sort`, {"sort": event});