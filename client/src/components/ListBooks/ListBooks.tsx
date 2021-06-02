import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllBooks } from '../../api';
import { getBooksError, getBooksRequest, getBooksSuccess } from '../../store/actions/books';
import { AppStateType } from '../../store/reducers';
import { Book } from '../../types/types';
import ItemBook from '../ItemBook/ItemBook';
import Preloader from '../Preloader/Preloader';

const ListBooks = () => {
    const { isError, isLoading } = useSelector((state: AppStateType) => state.loading)
    const dispatch = useDispatch()
    const [books, setBooks] = React.useState<Book[]>([]);

    React.useEffect(() => {
        (async() => {
            dispatch(getBooksRequest)
            try {
                const { data } = await fetchAllBooks();
                setBooks(data);
                dispatch(getBooksSuccess)
            } catch {
                dispatch(getBooksError)
            }
        })();
    }, [])
    
    // if (isLoading) return <Preloader/>

    return (
        <>
            <h1 className="main__title">My Library</h1>
            {isError && <h2 className="main__error">Failed to load books</h2>}
            <div className="main__list">
                {books.map((book: Book) => (
                    <Link to={`book/${book.id}`} key={book.id}>
                        <ItemBook
                            book={book}
                            key={book.id}
                        />
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ListBooks;