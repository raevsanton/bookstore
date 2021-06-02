import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/reducers';
import './modal.scss';

const Modal: React.FC<any> = ({
    modalActive,
    setModalActive,
    children
}) => {
    const { darkMode } = useSelector((store: AppStateType) => store.darkMode);
    return (
        <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
            <div className={`${modalActive ? "modal__content active" : "modal__content"} ${darkMode && "dark-background"}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;