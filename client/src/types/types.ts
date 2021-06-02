import { 
    GET_BOOKS_REQUEST, 
    GET_BOOKS_SUCCESS, 
    GET_BOOKS_ERROR, 
    GET_ONE_BOOK_SUCCESS, 
    REMOVE_ONE_BOOK_SUCCESS,
    REMOVE_ONE_BOOK_ERROR
} from "../store/actions/consts";

export interface Book {
    id: string
    link: string
    cover: string
    title: string
    subtitle: string
    authors: string[]
    description: string
    price: number
}

//Books types
export interface GetBooksRequestAction {
    type: typeof GET_BOOKS_REQUEST
}
export interface GetBooksSuccessAction {
    type: typeof GET_BOOKS_SUCCESS
}
export interface GetBooksErrorAction {
    type: typeof GET_BOOKS_ERROR
}
export interface GetOneBookSuccessAction {
    type: typeof GET_ONE_BOOK_SUCCESS
    payload: Book
}
export interface RemoveBookSuccessAction {
    type: typeof REMOVE_ONE_BOOK_SUCCESS
    payload: string
}
export interface RemoveBookErrorAction {
    type: typeof REMOVE_ONE_BOOK_ERROR
}
export type BooksActions = GetBooksRequestAction
    | GetBooksSuccessAction
    | GetBooksErrorAction
    | GetOneBookSuccessAction
    | RemoveBookSuccessAction
    | RemoveBookErrorAction