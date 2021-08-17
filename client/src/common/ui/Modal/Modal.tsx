import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../store/rootReducer';
import './modal.scss';
import { closeModal } from '../../../store/modal/actions';

interface IModalProps {
  children: ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((store: AppStateType) => store.darkMode);
  const { modalOpen } = useSelector((store: AppStateType) => store.modal);
  return (
    <>
      {modalOpen && (
        <div
          className={modalOpen ? 'modal active' : 'modal'}
          onClick={(): void => {
            dispatch(closeModal());
          }}
        >
          <div
            className={`${modalOpen ? 'modal__content active' : 'modal__content'} ${
              darkMode && 'dark-background'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
