import React from 'react';
import './bookPage.scss';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, deleteBook } from '../../store/books/actions';
import { closeModal, openModal } from '../../store/modal/actions';
import { Modal } from '../../common/ui/Modal/Modal';
import { Success } from '../../common/ui/Modal/components/Success';
import { Error } from '../../common/ui/Modal/components/Error';
import { Preloader } from '../../components/Preloader/Preloader';
import { selectBooks } from '../../store/books/selectors';
import { selectModal } from '../../store/modal/selectors';
import { ModalStatus } from '../../store/modal/types';
import { selectTheme } from '../../store/theme/selectors';

interface Props {
  history: RouteComponentProps['history'];
}

export const BookPage = ({ history }: Props): React.ReactElement => {
  const dispatch = useDispatch();

  const { darkMode } = useSelector(selectTheme);
  const { book, error, loaded } = useSelector(selectBooks);
  const { modalStatus } = useSelector(selectModal);

  const { id: bookId } = useParams<{ id: string }>();

  React.useEffect((): void => {
    dispatch(fetchBook(bookId));
  }, [bookId, dispatch]);

  const handleDeleteBook = (): void => {
    dispatch(deleteBook(bookId, history));
  };

  const handleCloseModal = (): void => {
    dispatch(closeModal());
  };

  const handleOpenModal = (): void => {
    dispatch(openModal());
  };

  if (error) return <h2 className="main__error">Failed to load books</h2>;

  return (
    <>
      <Modal>
        {modalStatus === ModalStatus.SUCCESS && <Success />}
        {modalStatus === ModalStatus.ERROR && <Error />}
        {modalStatus === ModalStatus.DEFAULT && (
          <>
            <h2>Are you want to remove this book?</h2>
            <br />
            <button type="button" className="main__remove" onClick={handleDeleteBook}>
              Yes
            </button>
            &ensp;
            <button type="button" onClick={handleCloseModal}>
              No
            </button>
          </>
        )}
      </Modal>
      {loaded ? (
        <div className={`bookpage ${darkMode && 'dark-background'}`}>
          <img className="bookpage__cover" src={book?.cover} alt="cover-book" />
          <div className="bookpage__info">
            <h1 className="bookpage__title">{book?.title}</h1>
            <div className="bookpage__authors">
              <span>{book?.authors.join(',  ')}</span>
            </div>
            <p className="bookpage__subtitle">{`«${book?.subtitle}»`}</p>
            <p className="bookpage__description">{book?.description}</p>
            <a href={book?.link} target="_blank" rel="noopener noreferrer">
              Preview
              <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" color="#808080" />
            </a>
            <div className={`bookpage__price ${darkMode && 'dark-white'}`}>
              <h1>{book?.price}</h1>
              <h3>$</h3>
              <button type="button" onClick={handleOpenModal}>
                Remove
              </button>
            </div>
            <br />
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};
