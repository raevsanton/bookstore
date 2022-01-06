import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './modal.scss';
import { closeModal } from '../../../store/modal/actions';
import { selectTheme } from '../../../store/theme/selectors';
import { selectModal } from '../../../store/modal/selectors';

interface Props {
  children: ReactNode;
}

export const Modal = ({ children }: Props): React.ReactElement => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(selectTheme);
  const { modalOpen } = useSelector(selectModal);
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
