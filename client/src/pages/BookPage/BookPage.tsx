import React from 'react';
import './bookPage.scss';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import { getOneBook, removeOneBook } from '../../store/books/actions';
import { AppStateType } from '../../store/rootReducer';
import Modal from '../../common/ui/Modal';
import Success from '../../common/ui/Modal/components/Success';
import Error from '../../common/ui/Modal/components/Error';
import { closeModal, openModal } from '../../store/modal/actions';
import { ModalStatus } from '../../store/modal/reducer';

interface IProps {
  history: RouteComponentProps['history'];
}

const BookPage = (props: IProps) => {
  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  const { darkMode } = useSelector((state: AppStateType) => state.darkMode);
  const { book } = useSelector((state: AppStateType) => state.books);
  const { isError, isLoading } = useSelector((state: AppStateType) => state.loading);
  const { modalStatus } = useSelector((store: AppStateType) => store.modal);
  const bookId = params.id;

  React.useEffect((): void => {
    dispatch(getOneBook(bookId));
  }, [bookId, dispatch]);

  if (isError) return <h2 className="main__error">Failed to load books</h2>;
  if (isLoading) return <Preloader />;

  return (
    <>
      <Modal>
        {modalStatus === ModalStatus.SUCCESS && <Success />}
        {modalStatus === ModalStatus.ERROR && <Error />}
        {modalStatus === ModalStatus.DEFAULT && (
          <>
            <h2>Are you want to remove this book?</h2>
            <br />
            <button
              type="button"
              className="main__remove"
              onClick={() => dispatch(removeOneBook(bookId, props.history))}
            >
              Yes
            </button>
            &ensp;
            <button
              type="button"
              onClick={() => dispatch(closeModal())}
            >
              No
            </button>
          </>
        )}
      </Modal>
      <div className={`bookpage ${darkMode && 'dark-background'}`}>
        <img className="bookpage__cover" src={book?.cover} alt="cover-book" />
        <div className="bookpage__info">
          <div className="bookpage__authors">
            {book?.authors.map((author: string) => <span key={author}>{author}</span>)}
          </div>
          <h1 className="bookpage__title">{book?.title}</h1>
          <p className="bookpage__subtitle">{`«${book?.subtitle}»`}</p>
          <p className="bookpage__description">{book?.description}</p>
          <a href={book?.link} target="_blank" rel="noopener noreferrer">
            Preview
            <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" color="#808080" />
          </a>
          <br />
          <br />
          <button type="button" onClick={() => dispatch(openModal())}>Remove</button>
        </div>
      </div>
    </>
  );
};

export default BookPage;
